import { Box, Card, CardContent, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const hoursUntil = (time: number) => {
    const currentTime = Date.now();
    const timeTill = time - currentTime;
    const days = Math.floor(timeTill / 8.64e7) | 0;
    const hours = Math.floor((timeTill % 8.64e7) / 3.6e6) | 0;
    const minutes = Math.floor((timeTill % 3.6e6) / 6e4);
    const strings = [days.toString(), hours.toString(), minutes.toString()];
    for (let string in strings) {
        if (strings[string].length < 2) strings[string] = "0" + strings[string];
    }

    return strings.join(":")
};

const Countdown = () => {
    const theme = useTheme();
    const [count, setCount] = useState(hoursUntil(1653688800000));
    setInterval(function() {
        console.log("a")
        setCount(hoursUntil(1653688800000));
    },60000)
    return (
        <Typography
            color="#212121"
            variant="h1"
            sx={{
                lineHeight: "0.9",
                [theme.breakpoints.up("xs")]: {
                    fontSize: "5rem",
                },
                [theme.breakpoints.up("sm")]: {
                    fontSize: "6rem",
                },

                [theme.breakpoints.up("md")]: {
                    fontSize: "5rem",
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "7rem",
                },
            }}
        >
            {count}
        </Typography>
    );
};
export default Countdown;
