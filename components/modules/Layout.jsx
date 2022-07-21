import Header from "./Header";
import Footer from "./Footer";
import Gifts from "./Gifts";
import Events from "./Events";
import FAQ from "./FAQ";
import Feedback from "./Feedback";
import Details from "./Details";
import SEO from "./SEO";

import { useRouter } from "next/router";
import FeedbackModal from "./FeedbackModal";

const Layout = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <Header />
            {router.pathname === "/bucket" ? (
                <FeedbackModal type="bucket" />
            ) : (
                <FeedbackModal />
            )}
            <Details />
            {children}
            <Gifts />
            {router.pathname !== "/events" && <Events />}
            <FAQ />
            <SEO page={router.pathname} />
            <Feedback />
            <Footer />
        </>
    );
};

export default Layout;
