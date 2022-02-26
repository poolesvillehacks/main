import Link from "next/link";
import Image from "next/image";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Avatar,
    Button,
} from "@mui/material";
import { Link as MUILink } from "@mui/material";
const scroll = (id: string):void => {
    document.getElementById(id)?.scrollIntoView({inline: "center"})
};


function Navbar() {
    

    return (
        <nav>
            <AppBar elevation={4}>
                <Container>
                    <Toolbar disableGutters>
                        <Avatar
                            sx={{
                                mr: 2,
                                bgcolor: "transparent",
                            }}
                        >
                            <Image
                                src="/te2.svg"
                                alt="logo"
                                layout="fill"
                            ></Image>
                        </Avatar>

                        <Link href="#about" passHref>
                            <Button
                                sx={{ mr: 2, color: "white", display: "block" }}
                            >
                                About
                            </Button>
                        </Link>
                        <Link href="/events" passHref>
                            <Button
                                sx={{ mr: 2, color: "white", display: "block" }}
                            >
                                Events
                            </Button>
                        </Link>
                        <Link href="/join" passHref>
                            <Button
                                sx={{ mr: 2, color: "white", display: "block" }}
                            >
                                Join
                            </Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}

export default Navbar;
