import styles from "./Header.module.css"

export default function Header({children}) {
    return (
        <div>
            <header className={styles.header}>
                {children}
            </header>
            <div className={styles.menu}>
                <div className={styles.menuLinks}>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/posts/create">Create a Post</a>
                    <a href="/employees">Employees</a>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/impressum">Impressum</a>
                </div>

            </div>
        </div>

)
}