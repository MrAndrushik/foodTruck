import Layout from "../components/modules/Layout";
import "normalize.css";
import "../styles/global.scss";

import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
