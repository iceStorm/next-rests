import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { useEffect, useState } from "react"

import en from "src/locales/en/messages.json"
export type COLOR_MODES = keyof typeof en.color_modes

export default function TheColorModeSwitcher() {
    const [themeMode, setThemeMode] = useState(() => {
        if (typeof window !== "undefined") {
            if (
                localStorage.getItem("color-theme") === "dark" ||
                (!("color-theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                return "dark"
            } else {
                return "light"
            }
        }
    })

    useEffect(() => {
        console.log(themeMode)
    }, [])

    const toggleTheme = () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark")

        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark")
                localStorage.setItem("color-theme", "dark")
            } else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("color-theme", "light")
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("color-theme", "light")
            } else {
                document.documentElement.classList.add("dark")
                localStorage.setItem("color-theme", "dark")
            }
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => toggleTheme()}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
                {themeMode == "dark" ? (
                    <SunIcon className="h-5 w-5" />
                ) : (
                    <MoonIcon className="h-5 w-5" />
                )}
            </button>
        </>
    )
}
