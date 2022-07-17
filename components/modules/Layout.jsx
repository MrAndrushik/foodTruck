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
            {router.pathname !== "/events" &&
                router.pathname !== "/events/[id]" &&
                router.pathname !== "/foodtrucks/[id]" &&
                router.pathname !== "/favorites" &&
                router.pathname !== "/contacts" &&
                router.pathname !== "/bucket" &&
                router.pathname !== "/privacy" && <SEO />}
            <Feedback />
            <Footer />
        </>
    );
};

export default Layout;
