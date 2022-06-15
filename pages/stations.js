import Head from "next/head";
import Hero from "../components/stations/Hero";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";
import Gifts from "../components/modules/Gifts";
import Events from "../components/modules/Events";
import FAQ from "../components/modules/FAQ";
import Feedback from "../components/modules/Feedback";

// DATA
import CatalogData from "../public/data/stations/catalog.json";
import UpsaleData from "../public/data/stations/upsale.json";

export default function FoodTrucks() {
    return (
        <div>
            <Head>
                <title>Кулинарные станции</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <Catalog bucket={true} obj={CatalogData} />
            <Upsale obj={UpsaleData} />
            <Gifts />
            <Events />
            <FAQ />
            <Feedback />
        </div>
    );
}
