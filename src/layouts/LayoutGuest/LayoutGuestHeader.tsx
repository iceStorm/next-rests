/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from "clsx"
import Link from "next/link"

import { LayoutGuestTopCtaContainer } from "."
import styles from "./LayoutGuest.module.css"

export default function LayoutGuestHeader() {
    return (
        <>
            <LayoutGuestTopCtaContainer className="" />
            <header className="border border-gray-200 py-3 sticky top-0 bg-gray-50 shadow-sm">
                <div className={clsx(styles.container)}>
                    <a href="/">
                        <span>Hello</span>
                    </a>
                </div>
            </header>
        </>
    )
}
