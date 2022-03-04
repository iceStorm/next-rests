import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"

import Head from "next/head"
import { useTranslation } from "react-i18next"

import "src/locales"
import "src/styles/globals.css"
import useAuth from "src/hooks/useAuth"
import LayoutUser from "src/layouts/LayoutUser"
import LayoutGuest from "src/layouts/LayoutGuest"
import Loading from "src/components/TheLoadingBar"

function MyApp({ Component, pageProps }: AppProps) {
    const [state, setState] = useState({
        isRouteChanging: false,
        locationKey: 0,
    })

    const router = useRouter()
    const { t, i18n } = useTranslation()
    const auth = useAuth()

    useEffect(() => {
        i18n.changeLanguage(router.locale)

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

            console.log("locale:", i18n.language)
            // console.log("page loaded")
            // console.log(router.pathname)
        }

        router.events.on("routeChangeStart", handleRouteChangeStart)
        router.events.on("routeChangeComplete", handleRouteChangeEnd)
        router.events.on("routeChangeError", handleRouteChangeEnd)

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart)
            router.events.off("routeChangeComplete", handleRouteChangeEnd)
            router.events.off("routeChangeError", handleRouteChangeEnd)
        }
    }, [i18n, router.events, router.locale])

    // getting current page title
    const pageTitle = useMemo(() => {
        return `${i18n.t(`pages:title_keys.${router.pathname}`)} - ${
            process.env.NEXT_PUBLIC_APP_NAME
        }`
    }, [i18n, router.pathname])

    console.log("render...")
    return (
        <>
            {/* Global head info for the entire app, can be overridden by individual pages */}
            <Head>
                <title>{pageTitle}</title>
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
        </>
    )
}

export default MyApp
