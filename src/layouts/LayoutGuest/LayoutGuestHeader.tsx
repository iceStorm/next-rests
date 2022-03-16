/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"

import styles from "./LayoutGuest.module.css"
import TheColorModeSwitcher from "src/components/TheColorModeSwitcher"
import TheLanguageSwitcher from "src/components/TheLanguageSwitcher"

export default function LayoutGuestHeader() {
    return (
        <>
            <header className="py-3 sticky top-0 z-10 w-full border-b border-gray-200 dark:border-gray-200/20 bg-gray-100/75 backdrop-blur-md dark:bg-slate-800/75">
                <div className={clsx("container flex items-center justify-between")}>
                    {/* left side */}
                    <a href="/" className="flex items-center gap-2">
                        <Image
                            src="/favicon.ico"
                            alt="logo"
                            width="40px"
                            height="40px"
                        />
                        <span className="font-semibold dark:text-white">
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </span>
                    </a>

                    {/* right side */}
                    <div className="flex justify-end items-center sm:gap-2">
                        <TheColorModeSwitcher />
                        <TheLanguageSwitcher />
                    </div>
                </div>
            </header>
        </>
    )
}
