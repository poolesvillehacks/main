import {Container, Typography, Box, IconButton, SvgIcon} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import  DiscordIcon  from "../../public/8discord.svg";

import Image from "next/image"

function Footer() {
    const info = {
        discord: "https://discord.gg/UbBbwypAwk",
        instagram: "https://instagram.com/poolesvillehacks",
        email: "mailto:poolesvillehacks@gmail.com"
    };
    return (
        <footer>
            <Container
                sx={{
                    py: { xs: 4, md: 6 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box>
                    <IconButton aria-label="Discord" href={info.discord}>
                        <Image
                            src={DiscordIcon}
                            alt="Discord"
                            width="40px"
                            height="40px"
                        ></Image>
                    </IconButton>
                    <IconButton
                        aria-label="Instagram"
                        size="large"
                        href={info.instagram}
                    >
                        <InstagramIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        aria-label="poolesvillehacks@gmail.com"
                        size="large"
                        href={info.email}
                    >
                        <EmailIcon fontSize="inherit" />
                    </IconButton>
                </Box>
                <Typography textAlign="center" variant="body2">
                    © poolesville_hacks 2022
                    <br></br>
                    This site is under construction 🚧
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
