import clsx from "clsx"
import styles from "./LayoutGuest.module.css"

export default function LayoutGuestTopCtaContainer(props: any) {
    return (
        <>
            <nav className={clsx(props.className, "py-2 bg-white text-white")}>
                <div className={styles.container}>Top CTA.</div>
            </nav>
        </>
    )
}
