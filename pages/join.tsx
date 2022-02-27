import type { NextPage } from "next";

import { Container, Box, Typography } from "@mui/material";


const Join: NextPage = () => {
   
    return (
        <>
            <Container
                sx={{
                    minHeight: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 8,
                    flexDirection: "column",
                }}
            >
                <Typography>This page is under construction!</Typography>
            </Container>
        </>
    );
};

export default Join;
