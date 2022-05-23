import type { NextPage } from "next";

import Link from "next/link";

import {
    Container,
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import Image from "next/image";

import zpw from "../public/prizes/rpw.png";
import ds from "../public/prizes/discord.webp";
import def from "../public/prizes/def.png";
const prizeList = [
    {
        name: "Best Overall",
        media: (
            <Box
                sx={{
                    width: "300px",
                    height: "200px",
                    position: "relative",
                    background:
                        "linear-gradient(113.96deg, #BEBEBE 0%, #585858 100%)",
                    borderRadius: "15px",
                }}
            >
                <Typography
                    sx={{
                        position: "absolute",
                        width: "75px",
                        height: "154px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontSize: "128px",
                        lineHeight: "154px",

                        color: "#FFFFFF",
                    }}
                >
                    ?
                </Typography>
            </Box>
        ),
        text: ["$20 gift card of choice", "Leading Learners EdTech Bundle"],
    },
    {
        name: "Best ???",
        media: (
            <Box
                sx={{
                    width: "300px",
                    height: "200px",
                    position: "relative",
                    background:
                        "linear-gradient(113.96deg, #BEBEBE 0%, #585858 100%)",
                    borderRadius: "15px",
                }}
            >
                <Typography
                    sx={{
                        position: "absolute",
                        width: "75px",
                        height: "154px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontSize: "128px",
                        lineHeight: "154px",

                        color: "#FFFFFF",
                    }}
                >
                    ?
                </Typography>
            </Box>
        ),
        text: [
            "$10 gift card of choice",
            "1 year of Wolfram|Alpha Pro",
            "1 year of Wolfram|One",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Best ???",
        media: (
            <Image
                src={zpw}
                width="300px"
                height="200px"
                alt="Raspberry Pi Zero W"
            ></Image>
        ),
        text: [
            "Raspberry Pi Zero W",
            "1 year of Canva Pro",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Beginner",
        media: (
            <Box
                sx={{
                    width: "300px",
                    height: "200px",
                    position: "relative",
                    background:
                        "linear-gradient(113.96deg, #BEBEBE 0%, #585858 100%)",
                    borderRadius: "15px",
                }}
            >
                <Typography
                    sx={{
                        position: "absolute",
                        width: "75px",
                        height: "154px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontFamily: "Russo One",
                        fontWeight: "400",
                        fontSize: "128px",
                        lineHeight: "154px",

                        color: "#FFFFFF",
                    }}
                >
                    ?
                </Typography>
            </Box>
        ),
        text: [
            "$10 gift card of choice",
            "6 year of Canva Pro",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Public Favorite",
        media: (
            <Image
                src={def}
                width="300px"
                height="300px"
                alt="Raspberry Pi Pico"
            ></Image>
        ),
        text: ["Raspberry Pi Pico", "Leading Learners EdTech Bundle"],
    },
    {
        name: "Miscellaneous",
        media: (
            <Image
                src={ds}
                width="300px"
                height="200px"
                alt="Discord Classic"
            ></Image>
        ),
        text: ["Discord Classic (2)", "Mule Sauce (3)"],
    },
];

const Prizes: NextPage = () => {
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
                <Typography component="h1" variant="h1">
                    Prizes
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexWrap: "wrap",
                    }}
                >
                    {prizeList.map((val) => (
                        <Card
                            variant="outlined"
                            sx={{
                                padding: 3,
                                borderRadius: "15px",
                                minHeight: 600,
                                width: 350,
                            }}
                            key={val.name}
                        >
                            <CardMedia>{val.media}</CardMedia>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>{val.name}</Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ whiteSpace: "pre-line" }}
                                >
                                    {val.text.join("\n\n")}
                                </Typography>
                                <Typography variant="h2" color="#555555">
                                    <br/>
                                    1 per team-member
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default Prizes;
