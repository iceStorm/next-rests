/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"

import styles from "./LayoutGuest.module.css"
import TheLColorModeSwitcher from "src/components/TheColorModeSwitcher"
import TheLanguageSwitcher from "src/components/TheLanguageSwitcher"

export default function LayoutGuestHeader() {
    return (
        <>
            <header className="py-3 sticky top-0 z-40 w-full transition-colors duration-500 lg:z-50 border-b border-gray-200 dark:border-gray-200/20 bg-white/95 dark:bg-slate-800">
                <div className={clsx(styles.container, "flex items-center justify-between")}>
                    {/* left side */}
                    <a href="/" className="flex items-center gap-2">
                        <Image
                            src="/favicon.ico"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <span className="font-semibold">
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </span>
                    </a>

                    {/* right side */}
                    <div>
                        <TheLColorModeSwitcher />
                        <TheLanguageSwitcher />
                    </div>
                </div>
            </header>
        </>
    )
}
