import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/forecastDash.module.css"

export default function ForecastDash() {

  return (
    <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                
                <div className={styles.detailsContainer}>
                    <div className={styles.details}>
                        <div className={styles.mainCurrent}>
                            <div className={styles.current}>
                                <p>Current Income:</p>
                                <p>Current Surplus:</p>
                            </div>
                            <div className={styles.current}>
                                <p>Current Expense:</p>
                                <p>Current Month:</p>
                            </div>
                        </div>

                        <div className={styles.target}>
                            <div className={styles.current}>
                                    <p>Target Income:</p>
                                    <p>Target Surplus:</p>
                                </div>
                                <div className={styles.current}>
                                    <p>Target Expense:</p>
                                    <p></p>
                                </div>
                            </div>
                    </div>

                    <div className={styles.surplus}>
                        <p>Current Surplus / Target Surplus</p>
                    </div>
                </div>


                <div className={styles.monthsContainer}>
                    <div className={styles.monthSection}>
                        <div className={styles.months}>January</div>
                        <div className={styles.months}>February</div>
                        <div className={styles.months}>March</div>
                        <div className={styles.months}>April</div>
                    </div>

                    <div className={styles.monthSection}>
                        <div className={styles.months}>May</div>
                        <div className={styles.months}>June</div>
                        <div className={styles.months}>July</div>
                        <div className={styles.months}>August</div>
                    </div>

                    <div className={styles.monthSection}>
                        <div className={styles.months}>September</div>
                        <div className={styles.months}>October</div>
                        <div className={styles.months}>November</div>
                        <div className={styles.months}>Decemeber</div>
                    </div>

                </div>


            </div>
        </div>

        <Footer />
    </>
  )
}

