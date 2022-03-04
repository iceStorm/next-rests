import clsx from "clsx"
import {
    LayoutGuestFooter,
    LayoutGuestHeader,
    LayoutGuestTopCtaContainer,
} from "."
import styles from "./LayoutGuest.module.css"

export default function LayoutGuest(props: any) {
    return (
        <>
            <div className="page-wrapper flex flex-col min-h-screen">
                {/* <LayoutGuestTopCtaContainer /> */}
                <LayoutGuestHeader />

                <main className={clsx("flex-1 bg-white dark:bg-slate-900/75")}>
                    <section className={clsx(styles.container)}>
                        {props.children}
                    </section>
                </main>

                <LayoutGuestFooter />
            </div>
        </>
    )
}
