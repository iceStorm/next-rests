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
            <ul>
                <li className="rounded-full px-5">
                    {i18n.t(`languages:${i18n.language}`)}
                </li>
            </ul>
        </>
    )
}
