import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import useAuth from "src/hooks/useAuth"
import LayoutGuest from "src/layouts/LayoutGuest"
import LayoutUser from "src/layouts/LayoutUser"

export default function TheRouterGuard(props: any) {
    const [state, setState] = useState({
        isRouteChanging: false,
        locationKey: 0,
    })

    const router = useRouter()
    const { i18n } = useTranslation()
    const auth = useAuth()

    useEffect(() => {
        // i18n.changeLanguage(router.locale)
        console.log("locale:", i18n.language)

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

            i18n.changeLanguage(router.locale)

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

    return (
        <>
            {auth ? (
                <LayoutUser>{props.children}</LayoutUser>
            ) : (
                <LayoutGuest>{props.children}</LayoutGuest>
            )}
        </>
    )
}
