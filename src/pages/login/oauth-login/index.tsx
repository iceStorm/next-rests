import clsx from "clsx"
import Image from "next/image"
import styles from "./OAuth-button.module.css"

export default function OAuthLoginView() {
    return (
        <div className={clsx(styles.oauthGrid)}>
            {/* Github */}
            <a
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
                href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}`}
            >
                <Image src="/oauth/github.svg" alt="" width="30" height="30" />
                <span>Github</span>
            </a>

            {/* Google */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image src="/oauth/google.svg" alt="" width="30" height="30" />
                <span>Google</span>
            </a>

            {/* Twitter */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image src="/oauth/twitter.svg" alt="" width="30" height="30" />
                <span>Twitter</span>
            </a>

            {/* Facebook */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image
                    src="/oauth/facebook.svg"
                    alt=""
                    width="30"
                    height="30"
                />
                <span>Facebook</span>
            </a>

            {/* Instagram */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image
                    src="/oauth/instagram.svg"
                    alt=""
                    width="30"
                    height="30"
                />
                <span>Instagram</span>
            </a>

            {/* Microsoft */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image
                    src="/oauth/microsoft.svg"
                    alt=""
                    width="30"
                    height="30"
                />
                <span>Microsoft</span>
            </a>

            {/* Linkedin */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image
                    src="/oauth/linkedin.svg"
                    alt=""
                    width="30"
                    height="30"
                />
                <span>Linkedin</span>
            </a>


            {/* Tiktok */}
            <a
                href="#"
                className={clsx(
                    styles.oauthButton,
                    "bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800 "
                )}
            >
                <Image
                    src="/oauth/tiktok.svg"
                    alt=""
                    width="30"
                    height="30"
                />
                <span>Tiktok</span>
            </a>
        </div>
    )
}
