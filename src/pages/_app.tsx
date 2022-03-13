import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import Head from "next/head"
import Script from "next/script"

import { useTranslation } from "react-i18next"
import { Provider } from "react-redux"

import "src/locales" // i18n init
import "src/styles/globals.css" // load global styles

import Loading from "src/components/TheLoadingBar"
import LayoutUser from "src/layouts/LayoutUser"
import LayoutGuest from "src/layouts/LayoutGuest"
import { store, wrapper } from "src/store"
import useAuth from "src/hooks/useAuth"

function MyApp({ Component, pageProps }: AppProps) {
    const [state, setState] = useState({
        isRouteChanging: false,
        locationKey: 0,
    })

    const router = useRouter()
    const { i18n } = useTranslation()
    const auth = useAuth()

    useEffect(() => {
        i18n.changeLanguage(router.locale)
        // console.log("locale:", i18n.language)

        const handleRouteChangeStart = () => {
            setState((prev) => ({
                ...prev,
                isRouteChanging: true,
                locationKey: prev.locationKey ^ 1,
            }))
        }

        const handleRouteChangeEnd = () => {
            setState((prev) => ({
                ...prev,
                isRouteChanging: false,
            }))
        }

        // register router events
        router.events.on("routeChangeStart", handleRouteChangeStart)
        router.events.on("routeChangeComplete", handleRouteChangeEnd)
        router.events.on("routeChangeError", handleRouteChangeEnd)

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart)
            router.events.off("routeChangeComplete", handleRouteChangeEnd)
            router.events.off("routeChangeError", handleRouteChangeEnd)
        }
    }, [i18n, router.events, router.locale])

    // getting current page i18n-title
    const pageTitle = useMemo(() => {
        return `${i18n.t(`pages:titles.${router.pathname}`)} - ${
            process.env.NEXT_PUBLIC_APP_NAME
        }`
    }, [i18n, i18n.language, router.pathname])

    // getting current page i18n-title
    const pageDescription = useMemo(() => {
        return i18n.t(`pages:descriptions.${router.pathname}`)
    }, [i18n, i18n.language, router.pathname])

    console.log("app render...")
    return (
        <>
            <Provider store={store}>
                {/* Global head info for the entire app, can be overridden by individual pages */}
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription}></meta>
                    <link rel="icon" href="/icon.png" />
                </Head>

                {/* Loading bar */}
                <Loading isRouteChanging={state.isRouteChanging} />

                {/* Role-based layout */}
                {auth ? (
                    <LayoutUser>
                        <Component {...pageProps} />
                    </LayoutUser>
                ) : (
                    <LayoutGuest>
                        <Component {...pageProps} />
                    </LayoutGuest>
                )}
            </Provider>
        </>
    )
}

//makeStore function that returns a new store for every request
export default wrapper.withRedux(MyApp)
