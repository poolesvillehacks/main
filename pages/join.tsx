import type { NextPage } from "next";

import { Container, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { NoEncryption } from "@mui/icons-material";
const Join: NextPage = () => {
    return (
        <>
            <Container
                sx={{
                    minHeight: "75vh",
                    display: "flex",

                    flexDirection: "column",
                    py: 8,
                    gap: "30px",
                    flexWrap: "wrap",
                }}
            >
                <Typography variant="h1">Register</Typography>

                <Typography
                    color="secondary"
                    variant="h2"
                    sx={{
                        display: "flex",
                    }}
                >
                    1. Join the Discord&nbsp;
                    <Link href="https://discord.gg/shsw6ykadD" passHref>
                        <Typography
                            component="a"
                            variant="h2"
                            sx={{
                                textDecoration: "underline",
                            }}
                        >
                            here
                        </Typography>
                    </Link>
                </Typography>

                <Typography
                    color="secondary"
                    variant="h2"
                    sx={{
                        display: "flex",
                    }}
                >
                    2. Register on DevPost&nbsp;
                    <Link href="https://poolesvillehacks.devpost.com/" passHref>
                        <Typography
                            component="a"
                            variant="h2"
                            sx={{
                                textDecoration: "underline",
                            }}
                        >
                            here
                        </Typography>
                    </Link>
                </Typography>
                <Typography
                    color="secondary"
                    variant="h2"

                >
                    3. Fill out the Google Form below&nbsp;
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd6yjOsTkTbv1Dt9d5hkAO4BxLZfpHUYY6I7RCF3NP7T6OZcQ/viewform?usp=sf_link"
                        passHref
                    >
                        <Typography
                            component="a"
                            variant="h2"
                            sx={{
                                textDecoration: "underline",
                            }}
                        >
                            or click this link
                        </Typography>
                    </Link>
                </Typography>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd6yjOsTkTbv1Dt9d5hkAO4BxLZfpHUYY6I7RCF3NP7T6OZcQ/viewform?embedded=true"
                    width="640"
                    height="640"
                    style={{
                        border: "none",
                        alignSelf: "center",
                        width: "100%"
                    }}
                >
                    Loading…
                </iframe>
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
