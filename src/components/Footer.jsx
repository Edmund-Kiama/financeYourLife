import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className="logo"><small>@ Finance Your Life</small></div>
            <div className="more"><small>FYL</small></div>
        </footer>
    )
}
export default Footer