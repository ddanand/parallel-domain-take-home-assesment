import React from "react";
import styled from '@emotion/styled';
import { Box, Typography } from "@mui/material";

import bannerImage from "../../images/banner.jpeg";
import companyImg from "../../images/company.png";

const H2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: url(${bannerImage});
    height: 200px;
    font-size: 2.5rem;
    margin: 0;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        img {
            margin-top: 30px;
        }
    }
    * {
        flex: 1;
    }
    img {
        margin-left: 30px;
        object-fit: cover;
        object-position: 50% 50%;
    }
`;

const JobsPageHeader = () => {
    return (
        <>
            <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
                <H2>
                    <div>Join Us</div>
                    <div>Grow with Parallel domain</div>
                </H2>
            </Typography>
            
            <Box sx={{ maxWidth: "1024px", width: "90%", margin: "0 auto", py: 5 }}>
                <Flex>
                    <div>
                        Parallel Domain envisions a future where every life on the planet is improved by the transition to safer and more equitable AI. To enable that future, we are on a mission to accelerate the development of machine perception with synthetic data.
                    </div>
                    <img src={companyImg} alt="company" />
                </Flex>
            </Box>
        </>
    );
}

export default JobsPageHeader;