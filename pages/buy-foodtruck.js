import Head from "next/head";
import Catalog from "../components/buy-foodtruck/Catalog";
import Hero from "../components/buy-foodtruck/Hero";

// DATA
import CatalogData from "../public/data/buy-foodtruck/catalog.json";

const BuyFoodtruck = () => {
    return (
        <>
            <Head>
                <title>FoodTruck</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <Catalog arr={CatalogData} />
        </>
    );
};

export default BuyFoodtruck;
