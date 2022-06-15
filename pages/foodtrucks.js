import Head from "next/head";
import Hero from "../components/modules/Hero";
import StepsBlock from "../components/modules/StepsBlock";
import Advantages from "../components/foodtrucks/Advantages";
import Questions from "../components/foodtrucks/Questions";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";
import Gifts from "../components/modules/Gifts";
import Events from "../components/modules/Events";
import FAQ from "../components/modules/FAQ";
import Feedback from "../components/modules/Feedback";

// DATA
import HeroData from "../public/data/foodtrucks/hero.json";
import StepsData from "../public/data/foodtrucks/steps.json";
import AdvantagesData from "../public/data/foodtrucks/advantages.json";
import CatalogData from "../public/data/foodtrucks/catalog.json";
import UpsaleData from "../public/data/foodtrucks/upsale.json";

export default function FoodTrucks() {
    return (
        <div>
            <Head>
                <title>FoodTruck</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero obj={HeroData} />
            <StepsBlock obj={StepsData} />
            <Advantages arr={AdvantagesData} />
            <Questions />
            <Catalog obj={CatalogData} />
            <Upsale obj={UpsaleData} />
            <Gifts />
            <Events />
            <FAQ />
            <Feedback />
        </div>
    );
}
