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



function Navbar() {
    

    return (
        <nav>
            <AppBar elevation={0} sx={{bgcolor: "primary.main"}}>
                <Container>
                    <Toolbar disableGutters>
                        <Link href="/" passHref>
                            <Avatar
                                sx={{
                                    mr: 2,
                                    bgcolor: "transparent",
                                }}
                            >
                                <Image
                                    unoptimized={true}
                                    src="/te2.svg"
                                    alt="logo"
                                    layout="fill"
                                ></Image>
                            </Avatar>
                        </Link>
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
