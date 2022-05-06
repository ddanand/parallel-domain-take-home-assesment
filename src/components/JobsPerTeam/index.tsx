import React from "react";
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import { Job } from "../../types/Job";

const JobDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 40px 0px;
    border-bottom: 1px solid rgb(129, 146, 158);
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const JobNameDiv = styled.div`
    margin-bottom: 10px;
    font-size: 24px;
`;

const JobLocationDiv = styled.div`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 2.5px;
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

type JobsPerTeamProps = {
    jobs: Array<Job>;
}

const JobsPerTeam = ({ jobs } : JobsPerTeamProps) => {
    const routeChange = (url: string) => { 
        window.open(url,"_self");
    }

    return (
        <div>
            {
               jobs.map(job => (
                <JobDiv key={job.id} onClick={() => routeChange(job.hostedUrl)} data-testid="job-div">
                  <div>
                    <Typography variant="h3">
                        <JobNameDiv>{job.text}</JobNameDiv>
                    </Typography>
                    <Typography variant="h6">
                        <JobLocationDiv>{job.categories.location}</JobLocationDiv>
                    </Typography>
                  </div>
                  <Button variant="outlined">Apply</Button>
                </JobDiv>
            ))}
        </div>
    );
}

export default JobsPerTeam;