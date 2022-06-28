import Layout from "../components/modules/Layout";
import "normalize.css";
import "../styles/global.scss";

import { useStore, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={store.__persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
