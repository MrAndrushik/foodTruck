import Layout from "../components/modules/Layout";
import "normalize.css";
import "../styles/global.scss";
import { useEffect } from "react";

import { Provider } from "react-redux";
import store from "../redux/store";
import { setBucketFromStorage } from "../redux/bucket";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const STORAGE_KEY = "store";
        const hasStorage = localStorage.getItem(STORAGE_KEY) !== null;

        if (hasStorage) {
            const localStore = JSON.parse(localStorage.getItem(STORAGE_KEY));
            store.dispatch(setBucketFromStorage(localStore.bucket));
        }
    }, []);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
