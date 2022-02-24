import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Container, Paper, Button } from "@mui/material";
import { Link as MUILink } from "@mui/material";

function Navbar() {
    return (
        <nav>
            <AppBar sx={{ bgcolor: "transparent" }}>
                <Container>
                    <Toolbar disableGutters>
                        <Paper
                            sx={{
                                mr: 2,
                                bgcolor: "transparent",
                                boxShadow: "none",
                            }}
                        >
                            <Image
                                src="/te2.svg"
                                alt="logo"
                                width="40px"
                                height="40px"
                            ></Image>
                        </Paper>
                        <Link href="/about">
                            <Button sx={{ mr: 2 }}>About</Button>
                        </Link>
                        <Link href="/events">
                            <Button sx={{ mr: 2 }}>Events</Button>
                        </Link>
                        <Link href="/join">
                            <Button sx={{ mr: 2 }}>Join</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}

export default Navbar;
