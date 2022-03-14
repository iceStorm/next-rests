import { TranslateIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function TheLanguageSwitcher() {
    const { i18n } = useTranslation()

    const [menu, setMenu] = useState(() => {
        return (
            <ul>
                {i18n.languages.map((language, index) => (
                    <li key={index}>
                        <a onClick={() => i18n.changeLanguage(language)}>
                            {i18n.t(`languages:${language}`)}
                        </a>
                    </li>
                ))}
            </ul>
        )
    })

    return (
        <>
            <button
                type="button"
                // onClick={() => toggleTheme()}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
                <TranslateIcon className="w-5 h-5" />
            </button>
            <ul>
                <li className="rounded-full px-5">
                    {/* {i18n.t(`languages:${i18n.language}`)} */}
                </li>
            </ul>
        </>
    )
}
