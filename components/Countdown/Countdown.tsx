
import { Box, Card, CardContent, Typography } from "@mui/material";

interface Prop {
    time: String
}

const Countdown = (props: Prop) => {
    let timeArr = props.time.split(":")
    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {timeArr[0].split("").map((val) => (
                <Card
                    variant="outlined"
                    sx={{ width: 50, height: 100, position: "relative" }}
                    key={val}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                position: "absolute",
                                fontSize: "45pt",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {val}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Typography sx={{ fontSize: "60pt", color: "primary.dark" }}>
                :
            </Typography>
            {timeArr[1].split("").map((val) => (
                <Card
                    variant="outlined"
                    sx={{ width: 50, height: 100, position: "relative" }}
                    key={val}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                position: "absolute",
                                fontSize: "45pt",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {val}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Typography sx={{ fontSize: "60pt", color: "primary.dark" }}>
                :
            </Typography>
            {timeArr[2].split("").map((val) => (
                <Card
                    variant="outlined"
                    sx={{ width: 50, height: 100, position: "relative" }}
                    key={val}
                >
                    <CardContent>
                        <Typography
                            sx={{
                                position: "absolute",
                                fontSize: "45pt",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {val}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};
export default Countdown;
