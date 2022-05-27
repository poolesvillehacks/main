import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import CountDown from "../components/Countdown/Countdown";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

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
import savemycents from "../public/smc.png";
import eli from "../public/eli.png";
import feasible from "../public/feasible.png";
const premiumSponsorships = [
    {
        name: "Save My Cents",
        url: "https://savemycents.com/",
        path: savemycents,
    },
    {
        name: "Eli Qian",
        url: "https://eliqian.com/",
        path: eli,
    },
    // {
    //     name: "Feasible",
    //     url: "https://www.feasible.io/",
    //     path: feasible,
    // },
];

import leadinglearners from "../public/leadinglearners.png";
import wolfram from "../public/ad.png";
import echo3D from "../public/echo3D.png";
import canva from "../public/canva.svg";
import loc from "../public/library_of_code.png";
import hc from "../public/hc.png";
import replit from "../public/replit.png";
import hackclubbank from "../public/hackclubbank.png";
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
    {
        name: "Canva",
        url: "https://www.canva.com/",
        path: canva,
    },
    {
        name: "echo3D",
        url: "https://console.echo3d.co/#/auth/register-promo?code=PoolesvilleHacks",
        path: echo3D,
    },
    {
        name: "Library Of Code",
        url: "https://www.libraryofcode.org",
        path: loc,
    },
    {
        name: "Hack Club",
        url: "https://hackclub.com/",
        path: hc,
    },
    {
        name: "Replit",
        url: "https://replit.com/redeem?code=poolesvillehacks",
        path: replit,
    },
    {
        name: "Hack Club Bank",
        url: "https://hackclub.com/bank/",
        path: hackclubbank,
    },
];
const FAQs = [
    {
        question: 'What is a "hackathon"?',
        answer: "A hackathon is an programming competition where programmers work together in order to create a programmatic solution to a problem in a short amount of time.",
    },
    {
        question: "Do you guys actually hack?",
        answer: "The \"hack\" in hackathon doesn't actually mean infiltrating a system or computer. It's a lot simpler than that. In this context, hacking means creating a rough solution to a problem, so a hackathon would be a coding marathon where teams attempt to create a solution to a problem.",
    },
    {
        question: "What if I have no programming experience?",
        answer: "Beginners are both welcomed and encouraged. We will have workshops over the course of the hackathon that can teach you the basics of programming. Additionally, we will have a 'Beginners Only' track for you to participate in.",
    },
    {
        question: "Is this event free?",
        answer: "poolesville_hacks is completely free for all elementary, middle, and high schoolers! All you need to do is sign up.",
    },
    {
        question: "What's the club for?",
        answer: "The poolesville_hacks club is mainly for developing the hackathon. You can join if you want to help! Just email us.",
    },
    {
        question: "Can I work with my friends?",
        answer: "Collaboration is not only allowed, it's encouraged. If you can't find a team, feel free to check out our Discord or work alone. However, we have a maximum of 4 people per team.",
    },
];

import phs from "../public/phs.jpg";

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const theme = useTheme();
    const image = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            {image && (
                <>
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "50vw",
                            height: "100vh",
                            img: {
                                opacity: "80%",
                            },
                            zIndex: -2,
                        }}
                    >
                        <Image
                            src={phs}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top 50px right 50%"
                            alt="poolesville high school"
                        ></Image>
                    </Box>
                </>
            )}
            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
                maxWidth="xl"
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "3px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        [theme.breakpoints.up("md")]: {
                            width: "30vw",
                        },
                    }}
                >
                    <Typography component="h1" variant="h1">
                        poolesville_&#8203;hacks
                    </Typography>
                    <Typography component="h2" variant="h2">
                        Join us for the first-ever hackathon of Poolesville High
                        School!
                    </Typography>
                    <Typography
                        component="h3"
                        variant="h3"
                        sx={{ color: "#716A48" }}
                        gutterBottom
                    >
                        May 27, 2022 - May 29, 2022
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "15px",
                        }}
                    >
                        <Button
                            color="secondary"
                            variant="contained"
                            href="/join"
                            sx={{ borderRadius: "10px" }}
                        >
                            Register
                        </Button>
                        <Button
                            color="secondary"
                            variant="outlined"
                            href="/#about"
                            sx={{
                                borderRadius: "10px",
                                borderWidth: 2,
                                borderColor: "#F0E4A3",
                                ":hover": {
                                    borderWidth: 2,
                                    borderColor: "#F0E4A3",
                                },
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Typography
                color="#373737"
                component="h5"
                variant="h5"
                id="about"
                sx={{
                    position: "absolute",
                    left: -30,
                    transform: "translateY(-60px)",
                    scrollMarginTop: "5vh",
                }}
            >
                ABOUT
            </Typography>
            <Container
                sx={{
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingY: 4,
                }}
                maxWidth="xl"
            >
                <Box
                    sx={{
                        height: 500,
                        width: "100%",
                        [theme.breakpoints.up("md")]: {
                            width: "50%",
                        },
                    }}
                >
                    <Typography component="h1" variant="h1">
                        About
                    </Typography>
                    <Typography
                        component="p"
                        variant="body1"
                        color="white"
                        sx={{
                            width: "100%",
                            [theme.breakpoints.up("md")]: {
                                width: "80%",
                            },
                        }}
                    >
                        poolesville_hacks is a school-wide hackathon club that
                        aims to host around two hackathons throughout the year.
                        Started by PHS students, the hackathon&apos;s objective
                        is to develop creative and technical skills.
                        <br></br>
                        <br></br>Participants will design, prototype, and
                        present their projects to a panel of judges and have a
                        chance to win a competitive prize.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        [theme.breakpoints.up("md")]: {
                            width: "50%",
                        },
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#F0E4A3",
                            borderRadius: 5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            minHeight: "100%",
                            width: 600,
                            py: 10,
                            px: 4,
                        }}
                    >
                        <Typography
                            color="#212121"
                            variant="h1"
                            sx={{
                                fontSize: "2rem",
                            }}
                        >
                            Next Hackathon in
                        </Typography>
                        <CountDown />
                        <Typography
                            color="#707070"
                            variant="h3"
                            sx={{
                                fontSize: "2rem",
                                lineHeight: "0.9",
                            }}
                            gutterBottom
                        >
                            May 27th, 2022
                        </Typography>
                        <Typography
                            color="#212121"
                            variant="h2"
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            poolesville_hacks 0 is completely free to register
                            and will be held virtually. Check out our schedule
                            for more information.
                        </Typography>
                        <Box sx={{ display: "flex", gap: "15px" }}>
                            <Button
                                color="primary"
                                variant="contained"
                                href="/join"
                                sx={{ borderRadius: "10px", color: "#F0E4A3" }}
                            >
                                Register
                            </Button>
                            <Button
                                color="primary"
                                variant="outlined"
                                href="/events"
                                sx={{
                                    borderRadius: "10px",
                                    borderWidth: 2,
                                    borderColor: "#212121",
                                    ":hover": {
                                        borderWidth: 2,
                                        borderColor: "#212121",
                                    },
                                }}
                            >
                                Schedule
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Typography
                color="#373737"
                component="h5"
                variant="h5"
                sx={{
                    position: "absolute",
                    right: -30,
                    transform: "translateY(-60px)",
                    scrollMarginTop: "5vh",
                }}
            >
                FAQ
            </Typography>
            <Container
                sx={{
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    marginy: 4,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
                maxWidth="xl"
            >
                <Typography component="h1" variant="h1" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                {FAQs.map((q) => (
                    <Accordion
                        sx={{
                            bgcolor: "secondary.main",
                            width: { sm: "100%", md: 900 },
                        }}
                        key={q.question}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                                component="p"
                                variant="h3"
                                sx={{ fontWeight: "600" }}
                                color="primary"
                            >
                                {q.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                component="p"
                                variant="h2"
                                color="primary"
                            >
                                {q.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
            <Typography
                color="#373737"
                component="h5"
                variant="h5"
                sx={{
                    position: "absolute",
                    left: -30,
                    transform: "translateY(-60px)",
                    scrollMarginTop: "5vh",
                    textOverflow: "hidden",
                }}
            >
                SPONSORS
            </Typography>
            <Container
                sx={{
                    minHeight: "30vh",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                id="sponsors"
                maxWidth="xl"
            >
                <Typography variant="h1" gutterBottom>
                    Made Possible By
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: "15px",

                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {premiumSponsorships.map((sponsor) => (
                        <Button
                            sx={{
                                width: { sm: 400, md: 600, xs: 300 },
                                height: 100,
                            }}
                            key={sponsor.name}
                            href={sponsor.url}
                        >
                            <Image
                                src={sponsor.path}
                                objectFit="contain"
                                layout="fill"
                                alt={sponsor.name}
                            ></Image>
                        </Button>
                    ))}
                    <Typography>
                        Feasible
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "15px",
                        my: 6,
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {sponsorships.map((sponsor) => (
                        <Button
                            sx={{
                                width: 400,
                                height: 100,
                            }}
                            key={sponsor.name}
                            href={sponsor.url}
                        >
                            <Image
                                src={sponsor.path}
                                objectFit="contain"
                                width={300}
                                height={75}
                                alt={sponsor.name}
                            ></Image>
                        </Button>
                    ))}
                </Box>
                <Typography variant="h2" sx={{ fontSize: "2rem" }} gutterBottom>
                    Want to sponsor?
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        mb: 3,
                    }}
                    href="/poolesville_hacks_sponsorship_brochure.pdf"
                >
                    Sponsorship Brochure
                </Button>
            </Container>
            {/* <Container
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
            </Container> */}
        </>
    );
};

export default Home;
