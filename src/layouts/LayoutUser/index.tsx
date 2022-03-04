import styles from './LayoutUser.module.css'

export default function LayoutUser(props: any) {
    return (
        <>
            <div className={styles.container}>
                {props.children}
            </div>
        </>
    );
}
