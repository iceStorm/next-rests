import { BeakerIcon, SunIcon } from "@heroicons/react/solid"
import { useSelector } from "react-redux"

import en from "src/locales/en.json"

export type COLOR_MODES = keyof typeof en.color_modes

export default function TheColorModeSwitcher() {
    return (
        <>
            <button
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-primary dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
                <SunIcon className="h-5 w-5" />
            </button>
        </>
    )
}
