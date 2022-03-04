import clsx from 'clsx'
import styles from './LayoutGuest.module.css'

export default function LayoutGuestFooter() {
    return <>
        <footer className="border border-gray-200 bg-gray-50 py-3">
            <div className={clsx(styles.container)}>
                <span>Footer</span>
            </div>
        </footer>
    </>
}
