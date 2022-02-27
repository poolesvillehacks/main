import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <Container
                sx={{
                    minHeight: 500,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "15px",
                }}
            >
                <Typography component="h1" variant="h3">
                    poolesville_&#8203;hacks
                </Typography>
                <Link href="#about" passHref>
                    <Button
                        color="secondary"
                        sx={{ width: 120 }}
                        variant="contained"
                    >
                        Learn More
                    </Button>
                </Link>
            </Container>

            <Box
                sx={{
                    bgcolor: "primary.dark",
                }}
            >
                <Container
                    sx={{
                        scrollMarginTop: "5vh",

                        py: { xs: 4, md: 8 },
                    }}
                    id="about"
                >
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                component="h2"
                                variant="h3"
                                gutterBottom
                            >
                                About Us
                            </Typography>
                            <Typography
                                component="p"
                                variant="body1"
                                color="primary.contrastText"
                            >
                                poolesville_hacks is a school-wide hackathon
                                club that hosts aims to around four hackathons
                                throughout the year. Started by PHS students,
                                the hackathon&apos;s objective is to develop creative and
                                technical skills. Participants will design,
                                prototype, and present their projects to a panel
                                of judges and have a chance to win a competitive
                                prize. Participating is completely free and is a
                                great chance to test your technical skills and
                                win great prizes. Additionally, workshops will
                                be hosted during the event that aim to introduce
                                students to skills used in the professional
                                field.
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    borderRadius: "20px",
                                    bgcolor: "secondary.light",
                                    height: 200,
                                    width: "100%",
                                    mx: 2,
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        component="h2"
                                        variant="h5"
                                        color="secondary.contrastText"
                                        sx={{ fontWeight: 600 }}
                                        gutterBottom
                                    >
                                        Next Hackathon
                                    </Typography>
                                    <Typography
                                        component="h2"
                                        variant="body1"
                                        color="secondary.contrastText"
                                    >
                                        TBD
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container
                sx={{
                    py: { xs: 4, md: 10 },
                }}
            >
                <Typography component="h2" variant="h4" gutterBottom>
                    Events
                </Typography>
                <Typography component="p" variant="subtitle1" gutterBottom>
                    Check out our full list of planned events!
                </Typography>
                <Link href="/events" passHref>
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ width: 120 }}
                    >
                        Schedule
                    </Button>
                </Link>
            </Container>
        </>
    );
};

export default Home;
