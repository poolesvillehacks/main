import {Container, Typography} from "@mui/material";

function Footer() {
    return (
        <footer>
            <Container sx={{ py: { xs: 4, md: 6 } }}>
                <Typography variant="body2">
                    © poolesville_hacks 2022
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
