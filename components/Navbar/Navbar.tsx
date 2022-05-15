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
    Drawer,
    IconButton,
    Divider,
} from "@mui/material";
import { Link as MUILink } from "@mui/material";
import { KeyboardEvent, MouseEvent, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleDrawer =
        (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as KeyboardEvent).key === "Tab" ||
                    (event as KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setOpen(open);
        };
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
                        <IconButton
                            aria-label="open drawer"
                            sx={{
                                display: { xs: "block", md: "none" },
                                position: "absolute",
                                right: 0,
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                position: "absolute",
                                right: 0,
                                gap: "15px",
                                alignItems: "center",
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
                            <Link href="/join" passHref>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    sx={{ borderRadius: "10px", height: 40 }}
                                >
                                    Register
                                </Button>
                            </Link>
                        </Box>
                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: "100vh",
                                    bgcolor: "secondary.main",
                                    p: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}
                            >
                                <IconButton
                                    sx={{ color: "primary.main", mb: 1 }}
                                >
                                    <CloseIcon onClick={toggleDrawer(false)} />
                                </IconButton>
                                <Divider
                                    sx={{
                                        bgcolor: "primary.main",
                                        width: "80%",
                                        alignSelf: "center",
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "15px",
                                        width: "100%",
                                        flexDirection: "column",
                                        justifyContent: "space-evenly",
                                        flexGrow: 1,
                                        position: "relative",
                                        pl: 2,
                                        alignItems: "center",
                                    }}
                                >
                                    <Link href="/" passHref>
                                        <Typography
                                            component="a"
                                            color="primary.main"
                                            variant="h6"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: "2rem",
                                            }}
                                            onClick={toggleDrawer(false)}
                                        >
                                            Home
                                        </Typography>
                                    </Link>
                                    <Link href="/#about" passHref>
                                        <Typography
                                            component="a"
                                            color="primary.main"
                                            variant="h6"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: "2rem",
                                            }}
                                            onClick={toggleDrawer(false)}
                                        >
                                            About
                                        </Typography>
                                    </Link>
                                    <Link href="/events" passHref>
                                        <Typography
                                            component="a"
                                            color="primary.main"
                                            variant="h6"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: "2rem",
                                            }}
                                            onClick={toggleDrawer(false)}
                                        >
                                            Schedule
                                        </Typography>
                                    </Link>
                                    <Box
                                        sx={{ position: "absolute", bottom: 0 }}
                                    >
                                        <Link href="/join" passHref>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                sx={{
                                                    borderRadius: "10px",
                                                    height: 40,
                                                }}
                                                onClick={toggleDrawer(false)}
                                            >
                                                Register
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}

export default Navbar;
