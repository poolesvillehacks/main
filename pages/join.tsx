import type { NextPage } from "next";

import { Container, Box, Typography, Button } from "@mui/material";

const Join: NextPage = () => {
    return (
        <>
            <Container
                sx={{
                    minHeight: "75vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 8,
                    gap: "30px",
                    flexWrap: "wrap",
                }}
            >
                <Typography>
                    Registration hasn&apos;t opened yet!
                </Typography>
                {/* <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ height: 200, width: 400 }}
                >
                    <Typography>Participant</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ height: 200, width: 400 }}
                >
                    <Typography>Club Member</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ height: 200, width: 400 }}
                >
                    <Typography>Mentor</Typography>
                </Button>
                <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ height: 200, width: 400 }}
                >
                    <Typography>Judge</Typography>
                </Button> */}
            </Container>
        </>
    );
};

export default Join;
