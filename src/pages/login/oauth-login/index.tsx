import clsx from "clsx"
import Image from "next/image"
import styles from "./OAuth-button.module.css"

export default function OAuthLoginView() {
    const OAUTH_PROVIDERS = [
        {
            name: "Github",
            authUrl: `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}`,
            iconUrl: "/oauth/github.svg",
        },
        {
            name: "Google",
            authUrl: "#",
            iconUrl: "/oauth/google.svg",
        },
        {
            name: "Twitter",
            authUrl: "#",
            iconUrl: "/oauth/twitter.svg",
        },
        {
            name: "Facebook",
            authUrl: "#",
            iconUrl: "/oauth/facebook.svg",
        },
        {
            name: "Instagram",
            authUrl: "#",
            iconUrl: "/oauth/instagram.svg",
        },
        {
            name: "Microsoft",
            authUrl: "#",
            iconUrl: "/oauth/microsoft.svg",
        },
        {
            name: "Linkedin",
            authUrl: "#",
            iconUrl: "/oauth/linkedin.svg",
        },
        {
            name: "Tiktok",
            authUrl: "#",
            iconUrl: "/oauth/tiktok.svg",
        },
    ]

    return (
        <div className={clsx(styles.oauthGrid)}>
            {OAUTH_PROVIDERS.map((provider, index) => {
                return (
                    <a
                        key={index}
                        className={clsx(
                            styles.oauthButton,
                            "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                        )}
                        href={provider.authUrl}
                    >
                        <Image
                            src={provider.iconUrl}
                            alt=""
                            width="30"
                            height="30"
                        />
                        <span>{provider.name}</span>
                    </a>
                )
            })}
        </div>
    )
}
