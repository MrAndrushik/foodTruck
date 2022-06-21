import Head from "next/head";
import Hero from "../components/modules/Hero";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";

// DATA
import HeroData from "../public/data/furniture/hero.json";
import CatalogData from "../public/data/furniture/catalog.json";
import UpsaleData from "../public/data/furniture/upsale.json";

export default function FoodTrucks() {
    return (
        <div>
            <Head>
                <title>Кулинарные станции</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero partial={true} obj={HeroData} />
            <Catalog partial={true} bucket={true} obj={CatalogData} />
            <Upsale obj={UpsaleData} />
        </div>
    );
}
