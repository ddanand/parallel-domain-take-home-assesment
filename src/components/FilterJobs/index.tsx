import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';

import { Job } from "../../types/Job";

const Flex = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        .MuiFormControl-root {
            width: 100%;
            margin-right: 0;
            margin-bottom: 15px;
        }
    }
`;

const Label = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

type FilterJobsProps = {
    jobs: Array<Job>;
    applyFilterCallback: (data: { }) => {};
}

const FilterJobs = ({ jobs, applyFilterCallback }: FilterJobsProps) => {
    const [location, updateLocation] = useState<string>('');
    const [team, updateTeam] = useState<string>('');
    const [workType, updateWorkType] = useState<string>('');

    const teams: Array<string> = [...new Set(jobs.map(item => item.categories.team))];
    const jobLocations: Array<string> = [...new Set(jobs.map(item => item.categories.location))];
    const jobWorkTypes: Array<string> = [...new Set(jobs.map(item => item.categories.commitment))];

    const handleLocationChange = (event: SelectChangeEvent) => {
        applyFilterCallback({
            team, location: event.target.value, workType
        });
        updateLocation(event.target.value as string);
    };

    const handleTeamChange = (event: SelectChangeEvent) => {
        applyFilterCallback({
            team: event.target.value, location, workType
        });
        updateTeam(event.target.value as string);
    };

    const handleWorkTypeChange = (event: SelectChangeEvent) => {
        applyFilterCallback({
            team, location, workType: event.target.value
        });
        updateWorkType(event.target.value as string);
    };

    return (
        <Flex>
            <Label>Filter by:</Label>
            <FormControl sx={{ width: 240, marginRight: "20px" }}>
                <Select
                    id="location"
                    value={location}
                    displayEmpty
                    onChange={handleLocationChange}
                >
                    <MenuItem value="">
                        ALL LOCATIONS
                    </MenuItem>
                    {jobLocations.map(location => <MenuItem id={location} value={location}>{location}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ width: 150, marginRight: "20px" }}>
                <Select
                    id="team"
                    value={team}
                    displayEmpty
                    onChange={handleTeamChange}
                >
                    <MenuItem value="">
                        ALL TEAMS
                    </MenuItem>
                    {teams.map(team => <MenuItem id={team} value={team}>{team}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ width: 180 }}>
                <Select
                    id="workType"
                    value={workType}
                    displayEmpty
                    onChange={handleWorkTypeChange}
                >
                    <MenuItem value="">
                        ALL WORK TYPES
                    </MenuItem>
                    {jobWorkTypes.map(workType => <MenuItem id={workType} value={workType}>{workType}</MenuItem>)}
                </Select>
            </FormControl>
        </Flex>
    )
}

export default FilterJobs;