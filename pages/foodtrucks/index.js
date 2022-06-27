import Head from "next/head";
// import Hero from "../../components/modules/Hero";
import Hero from "../../components/foodtrucks/Hero";
import StepsBlock from "../../components/modules/StepsBlock";
import Advantages from "../../components/foodtrucks/Advantages";
import Questions from "../../components/foodtrucks/Questions";
import Catalog from "../../components/modules/Catalog";
import Upsale from "../../components/modules/Upsale";

// DATA
import HeroData from "../../public/data/foodtrucks/hero.json";
import StepsData from "../../public/data/foodtrucks/steps.json";
import AdvantagesData from "../../public/data/foodtrucks/advantages.json";
import CatalogData from "../../public/data/foodtrucks/catalog.json";
import UpsaleData from "../../public/data/foodtrucks/upsale.json";

export default function FoodTrucks() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Фудтраки в аренду</title>
                <meta
                    itemProp="description"
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    itemProp="keywords"
                    name="keywords"
                    content="ключевые_слова_для_страницы"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Hero obj={HeroData} /> */}
            <Hero />
            <StepsBlock obj={StepsData} />
            <Advantages obj={AdvantagesData} />
            <Questions />
            <Catalog obj={CatalogData} link={true} />
            <Upsale obj={UpsaleData} />
        </>
    );
}
