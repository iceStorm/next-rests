import clsx from 'clsx'
import styles from './LayoutGuest.module.css'

export default function LayoutGuestFooter() {
    return <>
        <footer className="border-t border-gray-200 dark:border-gray-200/20 py-3 bg-gray-100 dark:bg-slate-800">
            <div className={clsx("container")}>
                <span>Copyright &copy; { new Date().getFullYear() } - { process.env.NEXT_PUBLIC_APP_NAME }</span>
            </div>
        </footer>
    </>
}
