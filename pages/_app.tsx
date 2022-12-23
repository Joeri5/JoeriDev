import "../styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {SessionProvider} from "next-auth/react";
import axios from "axios";

type CustomAppProps = {
    pageProps: any;
} & AppProps;

export const spring = axios.create({ baseURL: `${process.env.NEXTAUTH_URL}/api/spring` });

export default function App({ Component,  pageProps: { session, ...pageProps }}: CustomAppProps) {
    return (
        <Provider store={store}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </Provider>
    )
}
