import styles from "../styles/navbar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="../../assets/money.png"  className={styles.icon}/>
                    <h1>Finance Your Life</h1>
                </div>
                <img src="../../assets/menu.png" className={styles.icon} />
        </nav>
    )
}
export default NavBar