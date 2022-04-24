import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { ReactNode } from "react"
import Footer from "../Footer/Footer"
interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>poolesville_hacks</title>
                <meta
                    name="description"
                    content="poolesville_hacks is a student run hackathon"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta
                    name="keywords"
                    content="poolesville, hacks, poolesvillehacks, poolesville hacks, poolesville high school, poolesville_hacks, phs hacks, hackathon"
                />
                <link rel="icon" href="/te2.svg" />
            </Head>
            <Navbar />
            <main style={{
                position: "relative",
                overflowX: "hidden"
            }}>{children}</main>
            <hr color="#484848"></hr>
            <Footer />
        </>
    );
}
export default Layout