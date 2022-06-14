import Head from "next/head";
import Gifts from "../components/modules/Gifts";
import Events from "../components/modules/Events";

// DATA
import FAQ from "../components/modules/FAQ";
import Feedback from "../components/modules/Feedback";

export default function FoodTrucks() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Gifts />
            <Events />
            <FAQ />
            <Feedback />
        </div>
    );
}
