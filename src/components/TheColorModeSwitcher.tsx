import { DesktopComputerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid"
import clsx from "clsx"
import { useEffect, useState } from "react"

import en from "src/locales/en/messages.json"
export type COLOR_MODES = keyof typeof en.color_modes

export default function TheColorModeSwitcher() {
    const [themeMode, setThemeMode] = useState(() => {
        if (typeof window !== "undefined") {
            if (!("color-theme" in localStorage)) return "system"

            if (localStorage.getItem("color-theme") === "dark") return "dark"

            return "light"
        }

        return ""
    })

    useEffect(() => {
        console.log(themeMode)
    })

    const toggleTheme = (value: string) => {
        console.log("toggling to:", value)

        setThemeMode((prev) => {
            if (value === "system") {
                localStorage.removeItem("color-theme")

                // get browser default theme mode
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }

                return value
            }

            localStorage.setItem("color-theme", value) // always save if value is not "system"
            const theme = localStorage.getItem("color-theme")

            // if set via local storage previously
            if (theme) {
                if (theme === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }

            return value
        })
    }

    return (
        <>
            <button
                type="button"
                // onClick={() => toggleTheme()}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
                <select
                    onChange={(e) => toggleTheme(e.target.value)}
                    value={themeMode}
                >
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>

                {themeMode == "dark" ? (
                    <SunIcon className="h-5 w-5" />
                ) : themeMode == "light" ? (
                    <MoonIcon className="h-5 w-5" />
                ) : (
                    <DesktopComputerIcon className="h-5 w-5" />
                )}
            </button>
        </>
    )
}
