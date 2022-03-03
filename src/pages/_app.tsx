import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", function() {
            console.log("page loaded");
        });
    }, [router.events]);

    return <Component {...pageProps} />;
}

export default MyApp;
