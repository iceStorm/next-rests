import clsx from "clsx"
import Image from "next/image"
import styles from "./OAuth-button.module.css"
import { OAUTH_PROVIDERS } from "./oauth-providers"

export default function OAuthLoginView() {
    return (
        <div className={clsx(styles.oauthGrid)}>
            {Object.entries(OAUTH_PROVIDERS).map(([name, value], index) => {
                return (
                    <a
                        key={index}
                        className={clsx(
                            styles.oauthButton,
                            "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                        )}
                        href={value.authUrl}
                    >
                        <Image
                            src={value.iconUrl}
                            alt=""
                            width="30"
                            height="30"
                        />
                        <span>{name}</span>
                    </a>
                )
            })}
        </div>
    )
}
