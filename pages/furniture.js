import Head from "next/head";
import Hero from "../components/modules/Hero";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";
import Gifts from "../components/modules/Gifts";
import Events from "../components/modules/Events";
import FAQ from "../components/modules/FAQ";
import Feedback from "../components/modules/Feedback";

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
            <Gifts />
            <Events />
            <FAQ />
            <Feedback />
        </div>
    );
}
