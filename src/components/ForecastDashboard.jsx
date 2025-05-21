import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/forecastDash.module.css"

import { useState } from "react"

export default function ForecastDash() {
    const [showPopUp, setShowPopUp] = useState(false)

    return (
        <>
            <main className={showPopUp ? styles.contentBlur : "" } >
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
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>January</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>February</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>March</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>April</div>
                            </div>

                            <div className={styles.monthSection}>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>May</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>June</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>July</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>August</div>
                            </div>

                            <div className={styles.monthSection}>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>September</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>October</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>November</div>
                                <div className={styles.months} onClick={() => setShowPopUp(true)}>Decemeber</div>
                            </div>

                        </div>


                    </div>
                </div>

                <Footer />
            </main>

            {showPopUp && (
                <section className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <div className={styles.popupHeader}>
                            <h2>January</h2>
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" 
                                alt="close" 
                                className={styles.close}
                                onClick={() => setShowPopUp(false)}
                                />
                        </div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Total Income</p>
                                </div>
                                <div>
                                    <p>1000</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Total Expense</p>
                                </div>
                                <div>
                                    <p>1000</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Surplus</p>
                                </div>
                                <div>
                                    <p>1000</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.income}>
                            <div className={styles.popupMiniDetails}>
                                <p>x</p>
                                <p>Total Income</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" />
                                <input type="number" placeholder="Amount" />
                                <button>Add Income</button>
                            </div>
                            <div className={styles.incomeList}>
                                    <p>Description</p>
                                    <p>Amount</p>
                            </div>
                        </div>

                        <div className={styles.expense}>
                            <div className={styles.popupMiniDetails}>
                                <p>x</p>
                                <p>Total Expense</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" />
                                <input type="number" placeholder="Amount" />
                                <button>Add Expense</button>
                            </div>
                            <div className={styles.expenseList}>
                                    <p>Description</p>
                                    <p>Amount</p>
                            </div>
                        </div>


                    </div>
                </section>
            )}
        </>
  )
}

