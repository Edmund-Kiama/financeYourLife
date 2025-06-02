import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/goal.module.css"

export default function GoalsTracker() {

    return (
        <>
            <main>
                <Navbar />
                <section className={styles.goalSection}>
                    <form className={styles.form}>
                        <h2>Add Goals</h2>
                        <div>
                            <label>Goal Description </label>
                            <input type="text" placeholder="Goal Description..." />
                        </div>
                        <div>
                            <label>Goal Price </label>
                            <input type="number" placeholder="How much the goal costs..." />
                        </div>
                        <div>
                            <label>Current Savings </label>
                            <input type="number" placeholder="How much have you saved so far..." />
                        </div>
                        <div>
                            <label>Action Plan </label>
                            <textarea rows={5} cols={32} > </textarea>
                        </div>
                        <div>
                            <label>Short Comings </label>
                            <textarea rows={5} cols={32}> </textarea>
                        </div>
                        <button type="submit">Add</button>
                    </form>

                    <div className={styles.goals}>
                        <h2>My Goals</h2>
                        <ul>
                            <li>
                                <div className={styles.descriPrice}>
                                    <h3>Buy a Bike</h3>
                                    <p>Ksh 400,000</p>
                                </div>
                                <div className={styles.actionPlan}>
                                    <h4>Action Plan</h4>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                </div>
                                <div className={styles.shortComings}>
                                    <h4>Short Comings</h4>
                                    <p>Missed savings last month</p>
                                </div>
                                <div className={styles.chart}>
                                    <h4>GAUGE CHART</h4>
                                    <p>current savings vs total price</p>
                                </div>
                            </li>

                            <li>
                                <div className={styles.descriPrice}>
                                    <h3>Buy a Bike</h3>
                                    <p>Ksh 400,000</p>
                                </div>
                                <div className={styles.actionPlan}>
                                    <h4>Action Plan</h4>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                </div>
                                <div className={styles.shortComings}>
                                    <h4>Short Comings</h4>
                                    <p>Missed savings last month</p>
                                </div>
                                <div className={styles.chart}>
                                    <h4>GAUGE CHART</h4>
                                    <p>current savings vs total price</p>
                                </div>
                            </li>

                            <li>
                                <div className={styles.descriPrice}>
                                    <h3>Buy a Bike</h3>
                                    <p>Ksh 400,000</p>
                                </div>
                                <div className={styles.actionPlan}>
                                    <h4>Action Plan</h4>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                    <p>Save x per month</p>
                                </div>
                                <div className={styles.shortComings}>
                                    <h4>Short Comings</h4>
                                    <p>Missed savings last month</p>
                                </div>
                                <div className={styles.chart}>
                                    <h4>GAUGE CHART</h4>
                                    <p>current savings vs total price</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <div>#polar area to see diferrence of my goal and what I currently have rn</div> */}

                <Footer />
            </main>
        </>
  )
}

