import { useState } from "react"
import { NavLink } from "react-router"

import styles from "../styles/navbar.module.css"


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
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" 
                        alt="close" 
                        className={styles.close}
                        onClick={() => setOpenDrawer(false)}
                        />
                </div>

                <div className={styles.drawerLinks}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Forecast Dashboard</p>
                    </NavLink>
                    <NavLink to="/monthly-check-ins" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Monthly Check-Ins</p>
                    </NavLink>
                    <NavLink to="/net-worth-&-debt" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Net Worth & Debt</p>
                    </NavLink>
                    <NavLink to="/savings-&-investments" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Savings & Investments</p>
                    </NavLink>
                    <NavLink to="/goals-tracker" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Goals Tracker</p>
                    </NavLink>
                    <NavLink to="/biggest-spenders" className={({ isActive }) => (isActive ? styles.drawerDetailsActive : styles.drawerDetails)}>
                        <p>l</p>
                        <p>Biggest Spenders</p>
                    </NavLink>
                </div>

            </div>
            )}
        </>
    )
}
export default NavBar