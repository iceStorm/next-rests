import { useEffect, useState } from "react"
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

            console.log("page loaded")
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
    }, [i18n, router.events])

    return (
        <>
            <Head>
                <title>
                    {i18n.t(`pages:title_keys.${router.pathname}`) +
                        process.env.APP_NAME}
                </title>
            </Head>

            <Loading isRouteChanging={state.isRouteChanging} />

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
