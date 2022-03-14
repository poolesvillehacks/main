import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Countdown from "../components/Countdown/Countdown";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Dialog,
    DialogContent,
    DialogContentText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

import { useState } from "react";

// let theDate = "5/20/2022 6:00 PM"

// const getTime = (date: string) => {
//     let datefuture = new Date(date);
//     datefuture.toLocaleString("en-US", { timeZone: "America/New_York" });
//     let datenow = new Date();
//     datenow.toLocaleString("en-US", { timeZone: "America/New_York" });
//     let date_future = datefuture.getTime();
//     let date_now = datenow.getTime();
//     let delta = Math.abs(date_future - date_now) / 1000;

//     // calculate (and subtract) whole days
//     let days = Math.floor(delta / 86400);
//     delta -= days * 86400;

//     // calculate (and subtract) whole hours
//     let hours = Math.floor(delta / 3600) % 24;
//     delta -= hours * 3600;

//     // calculate (and subtract) whole minutes
//     let minutes = Math.floor(delta / 60) % 60;
//     delta -= minutes * 60;
//     return [days, hours, minutes];
// };
// let time = getTime(theDate).join(":");
import leadinglearners from "../public/leadinglearners.png";
import wolfram from "../public/ad.png";
const sponsorships = [
    {
        name: "Leading Learners",
        url: "https://www.leading-learners.com/",
        path: leadinglearners,
    },
    {
        name: "Wolfram Language",
        url: "https://www.wolfram.com/language/",
        path: wolfram,
    },
];
const FAQs = [
    {
        question: 'What is a "hackathon"?',
        answer: "A hackathon is an event where programmers work together in order to create a programmatic solution to a problem.",
    },
    {
        question: "What if I have no programming experience?",
        answer: "Beginners are both welcomed and encouraged. We will have workshops over the course of the hackathon that can teach you the basics of programming.",
    },
    {
        question: "Is this event free?",
        answer: "poolesville_hacks is completely free for all elementary, middle, and high schoolers! All you need to do is sign up.",
    },
];

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <Box display="flex" gap="15px" flexDirection="row">
                    <Link href="#about" passHref>
                        <Button
                            color="secondary"
                            sx={{ width: 120 }}
                            variant="outlined"
                        >
                            Learn More
                        </Button>
                    </Link>
                    <Button
                        color="secondary"
                        sx={{ width: 140, fontWeight: 600 }}
                        variant="contained"
                        href="https://forms.gle/yaoMLbipLd9k9F7HA"
                        target="_blank"
                    >
                        Interest Form
                    </Button>
                </Box>
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
                                club that hosts aims to around two hackathons
                                throughout the year. Started by PHS students,
                                the hackathon&apos;s objective is to develop
                                creative and technical skills. Participants will
                                design, prototype, and present their projects to
                                a panel of judges and have a chance to win a
                                competitive prize.
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
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                    }}
                                >
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
                                        sx={{ fontWeight: 600, flexGrow: 1 }}
                                    >
                                        Estimated: 5/20 <br></br>Updates to
                                        come!
                                    </Typography>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        sx={{ width: 150, alignSelf: "center" }}
                                        onClick={handleClickOpen}
                                    >
                                        <Typography variant="subtitle1">
                                            Register
                                        </Typography>
                                    </Button>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogContent>
                                            <DialogContentText color="white" id="alert-dialog-description">
                                                {"Sorry! Registration isn't open yet."}
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
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
            <Container sx={{ py: { xs: 4, md: 10 } }}>
                <Typography component="h2" variant="h4" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                {FAQs.map((q) => (
                    <Accordion
                        sx={{ bgcolor: "primary.dark" }}
                        key={q.question}
                        elevation={0}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography component="p" variant="subtitle2">{q.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component="p" variant="body1">{q.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
            <Container
                sx={{
                    py: { xs: 4, md: 10 },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                id="sponsors"
            >
                <Typography variant="h4">Made Possible By</Typography>
                <Box sx={{ display: "flex", gap: "15px" }}>
                    {sponsorships.map((sponsor) => (
                        <Button key={sponsor.name} href={sponsor.url}>
                            <Image
                                src={sponsor.path}
                                objectFit="contain"
                                width={400}
                                height={100}
                                alt={sponsor.name}
                            ></Image>
                        </Button>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default Home;
