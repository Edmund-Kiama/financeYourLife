import styles from "../styles/navbar.module.css"

import { useState } from "react"

const NavBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/128/61/61584.png"  className={styles.iconLogo}/>
                    <h1>Finance Your Life</h1>
                </div>
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/14026/14026516.png" 
                    className={styles.icon} 
                    onClick={() => setOpenDrawer(true)}
                />
            </nav>

            {openDrawer && (
                <div className={openDrawer ? styles.drawer : ""}>
                <div className={styles.drawerHeader}>
                    <button 
                        className={styles.close}
                        onClick={() => setOpenDrawer(false)}
                    >X</button>
                </div>

                <div className={styles.drawerLinks}>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Forecast Dashboard</p>
                    </div>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Monthly Check-Ins</p>
                    </div>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Net Worth & Debt</p>
                    </div>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Savings & Investments</p>
                    </div>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Goals Tracker</p>
                    </div>
                    <div className={styles.drawerDetails}>
                        <p>l</p>
                        <p>Biggest Spenders</p>
                    </div>
                </div>

            </div>
            )}
        </>
    )
}
export default NavBar