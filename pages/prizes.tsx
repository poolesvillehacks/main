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

import wdqa from "../public/prizes/wdqa.png";
import ds from "../public/prizes/discrod-nitro-chara.webp";
import dwefgw from "../public/prizes/dwefgw.png";
import k552 from "../public/prizes/k552.png"
import afe from "../public/prizes/afe.png"
const prizeList = [
    {
        name: "Best Overall",
        media: (
            <Image
                src={k552}
                width="300px"
                height="300px"
                objectFit="contain"
                alt="Redragon K552"
            ></Image>
        ),
        text: [
            "Redragon K552",
            "$10 gift card of choice",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Best Finance",
        media: (
            <Image
                src={dwefgw}
                width="300px"
                height="300px"
                objectFit="contain"
                alt="Razer Kraken V3 X"
            ></Image>
        ),
        text: [
            "Razer Kraken V3 X",
            "1 year of Wolfram|Alpha Pro",
            "1 year of Wolfram|One",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Best Environmental",
        media: (
            <Image
                src={wdqa}
                width="300px"
                height="300px"
                objectFit="contain"
                alt="Phillips GoZero Self-Cleaning Water Bottle"
            ></Image>
        ),
        text: [
            "Phillips GoZero Self-Cleaning Water Bottle",
            "1 year of Canva Pro",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Beginner",
        media: (
            <Image
                src={afe}
                width="300px"
                height="300px"
                objectFit="contain"
                alt="Razer Viper Mini"
            ></Image>
        ),
        text: [
            "Razer Viper Mini",
            "6 months of Canva Pro",
            "Leading Learners EdTech Bundle",
        ],
    },
    {
        name: "Public Favorite",
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
        name: "Miscellaneous",
        media: (
            <Image
                src={ds}
                width="300px"
                height="200px"
                alt="Discord Classic"
            ></Image>
        ),
        text: [
            "Clash Royale Tournament - Discord Nitro Classic",
            "Best Participant Award - Discord Nitro Classic",
            "Raffle - Mule Sauce (3)",
        ],
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
                                minHeight: 680,
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
