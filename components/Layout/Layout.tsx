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

                <link rel="icon" href="/te2.svg" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
export default Layout