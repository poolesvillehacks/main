import Link from "next/link";
import Image from "next/image";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Avatar,
    Button,
    Box,
} from "@mui/material";
import { Link as MUILink } from "@mui/material";

function Navbar() {
    return (
        <nav>
            <AppBar elevation={0} sx={{ bgcolor: "primary.main" }}>
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Link href="/" passHref>
                            <Avatar
                                sx={{
                                    mr: 2,
                                    bgcolor: "transparent",
                                    cursor: "pointer",
                                    width: 50,
                                    height: 50,
                                }}
                            >
                                <Image
                                    src="/te2.svg"
                                    alt="logo"
                                    layout="fill"
                                ></Image>
                            </Avatar>
                        </Link>
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                right: 0,
                                gap: "15px",
                                alignItems: "center"
                            }}
                        >
                            <Link href="/" passHref>
                                <Typography
                                    component="a"
                                    color="white"
                                    variant="h6"
                                    sx={{ fontWeight: 400 }}
                                >
                                    Home
                                </Typography>
                            </Link>
                            <Link href="/#about" passHref>
                                <Typography
                                    component="a"
                                    color="white"
                                    variant="h6"
                                    sx={{ fontWeight: 400 }}
                                >
                                    About
                                </Typography>
                            </Link>
                            <Link href="/events" passHref>
                                <Typography
                                    component="a"
                                    color="white"
                                    variant="h6"
                                    sx={{ fontWeight: 400 }}
                                >
                                    Schedule
                                </Typography>
                            </Link>
                            <Link href="/" passHref>
                                <Typography
                                    component="a"
                                    color="white"
                                    variant="h6"
                                    sx={{ fontWeight: 400 }}
                                >
                                    Join Us
                                </Typography>
                            </Link>
                            <Link href="/join" passHref>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    sx={{ borderRadius: "10px", height: 40}}
                                >
                                    Register
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}

export default Navbar;
