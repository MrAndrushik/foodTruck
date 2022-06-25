import Head from "next/head";
import Bucket from "../components/modules/Bucket";
const BucketPage = () => {
    return (
        <div>
            <Head>
                <title>FoodTruck</title>
                <meta name="FoodTruck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Bucket />
        </div>
    );
};

export default BucketPage;
