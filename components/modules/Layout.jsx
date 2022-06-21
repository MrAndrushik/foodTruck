import Header from "./Header";
import Footer from "./Footer";
import Gifts from "./Gifts";
import Events from "./Events";
import FAQ from "./FAQ";
import Feedback from "./Feedback";
import Details from "./Details";

import { useRouter } from "next/router";
import FeedbackModal from "./FeedbackModal";

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <>
            <Header />
            <FeedbackModal />
            <Details />
            {children}
            <Gifts />
            {router.pathname !== "/events" && <Events />}
            <FAQ />
            <Feedback />
            <Footer />
        </>
    );
};

export default Layout;
