import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react";

import styles from "../styles/savingsInvestments.module.css"

import { RiAddBoxFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

export default function SavingsAndInvestments() {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <main>
                <div className={showForm ? styles.contentBlur : ""}>
                <Navbar />
                <section className={styles.mainContainer}>
                    <h2>Savings & Investments</h2>
                    <div className={styles.heading}>
                        <h3>Savings & Investments Total: 3</h3>
                        <RiAddBoxFill  onClick={() => setShowForm(x => !x)} className={styles.button} size={40}/>
                    </div>
                    <ul>
                        <li>
                            <div className={styles.percentImage}>
                                image
                            </div>
                            <div className={styles.name}>
                                <p>Britam</p>
                                <p>15,OOO/month</p>
                            </div>
                            <div className={styles.details}>
                                <p>Current Total: Kshs 20,000</p>
                                <p>Maturity Target: Kshs 100,000</p>
                                <p>Maturty Date: 2026</p>
                            </div>
                            <div className={styles.chart}>
                                gauge chart of current total vs maturity target
                            </div>
                        </li>

                        <li>
                            <div className={styles.percentImage}>
                                image
                            </div>
                            <div className={styles.name}>
                                <p>Britam</p>
                                <p>15,OOO/month</p>
                            </div>
                            <div className={styles.details}>
                                <p>Current Total: Kshs 20,000</p>
                                <p>Maturity Target: Kshs 100,000</p>
                                <p>Maturty Date: 2026</p>
                            </div>
                            <div className={styles.chart}>
                                gauge chart of current total vs maturity target
                            </div>
                        </li>

                    </ul>
                </section>
                {/* <Footer /> */}
                </div>
                {showForm && (
                <section className={styles.popupOverlay}>
                        <form className={styles.popup}>
                            <div className={styles.headers}>
                                <p></p>
                                <h2>Investment Form</h2>
                                <IoIosCloseCircle className={styles.iconClose} size={30} onClick={() => setShowForm(x => !x)} />
                            </div>
                            <div className={styles.formDetails}>
                                <div>
                                    <label>Organization</label>
                                    <input type="text" placeholder="Orgnization Name" />
                                </div>
                                <div>
                                    <label>Investments per month</label>
                                    <input type="number" placeholder="Investments/Month" />
                                </div>
                                <div>
                                    <label>Maturity Target</label>
                                    <input type="number" placeholder="Total Investment Target" />
                                </div>
                                <div>
                                    <label>Maturity Date</label>
                                    <input type="date" />
                                </div>

                                <button type="submit">Add</button>
                            </div>
                            
                        </form>
                </section>
                )}
            </main>
        </>
  )
}

