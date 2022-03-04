import clsx from 'clsx'
import styles from './LayoutGuest.module.css'

export default function LayoutGuestFooter() {
    return <>
        <footer className="border-t border-gray-200 dark:border-gray-200/20 py-3 bg-white dark:bg-slate-800">
            <div className={clsx(styles.container)}>
                <span>Footer</span>
            </div>
        </footer>
    </>
}
