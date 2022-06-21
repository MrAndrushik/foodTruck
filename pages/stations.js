import Head from "next/head";
import Hero from "../components/stations/Hero";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";

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
        </div>
    );
}
