import React,{ useEffect, useState, useMemo } from "react";
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import FilterJobs from "../FilterJobs/index.tsx";
import JobsPerTeam from "../JobsPerTeam/index.tsx";
import { Job } from "../../types/Job";

const TeamName = styled.div`
    margin-top: 80px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
`;

type DisplayJobsState = {
    loading: boolean;
    data: Array<Job>;
    filteredData: Array<Job>;
};

const API_URL = "https://api.lever.co/v0/postings/paralleldomain?mode=json";

const DisplayJobs = () => {
    const [state, setState] = useState<DisplayJobsState>({
        loading: true,
        data: [],
        filteredData: []
    });

    useEffect(() => {
        fetch(API_URL)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    data: data,
                    filteredData: data
                });
            })
    }, []);

    const applyFilterCallback = ({
        team, location, workType
    }) => {
        let filteredData = state.data;

        if (team) {
            filteredData = filteredData.filter(job => job.categories.team === team);
        }
        if (location) {
            filteredData = filteredData.filter(job => job.categories.location === location);
        }
        if (workType) {
            filteredData = filteredData.filter(job => job.categories.commitment === workType);
        }

        setState({
            ...state,
            filteredData
        });        
    }

    const groupedFilteredData = useMemo(() => state.filteredData.reduce((previousValue, currentValue) => {
        if (previousValue[currentValue.categories.team]) {
            previousValue[currentValue.categories.team].push(currentValue);
        } else {
          previousValue[currentValue.categories.team] = [currentValue];
        }
        
        return previousValue;
    }, {}), [state.filteredData]);

    const renderGroupedData = () => Object.keys(groupedFilteredData).map((team) => {
        return (
            <React.Fragment key={team}>
                <Typography variant="subtitle1">
                    <TeamName data-testid="team-name">{team}</TeamName>
                </Typography>
                <JobsPerTeam jobs={groupedFilteredData[team]} />
            </React.Fragment>
        )
    });

    return (
        <div>
            {
                state.loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <FilterJobs
                          data-testid="filters"
                          jobs={state.data}
                          applyFilterCallback={applyFilterCallback}
                        />
                        {renderGroupedData()}
                    </>
                )
            }
        </div>
    );
}

export default DisplayJobs;