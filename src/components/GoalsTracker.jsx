import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/goal.module.css"

import { IoIosCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";

import { useState, useEffect } from "react";

const goalsTracked = [
    {
        description: "Buy a bike",
        price:200,
        currentSavings: 300,
        actionPlan: "Make a profit",
        shortComings: "No job"
    }
]

export default function GoalsTracker() {
    const[myGoals, setMyGoals] = useState(() => {
        let stored = localStorage.getItem("myGoals")
        return stored ? JSON.parse(stored) : goalsTracked
    })

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [savings, setSavings] = useState("")
    const [action, setAction] = useState("")
    const [sc, setSc] = useState("")
    const [showForm, setShowForm] = useState(false)

    const storeToLocale = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error("Error on storing to locale: ", error )
            return null
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            description: description,
            price: price,
            currentSavings: savings,
            actionPlan: action,
            shortComings:sc
        }
        let updatedGoals = [...myGoals, form]

        setMyGoals(updatedGoals)
        storeToLocale("myGoals", updatedGoals)
        console.log(updatedGoals)

        setDescription("")
        setPrice("")
        setAction("")
        setSavings("")
        setSc("")
        setShowForm(x => !x)
    }

    const handleGoalDelete = (index) => {
        let updatedGoals = myGoals.filter((goal,idx) => idx !== index)

        setMyGoals(updatedGoals)
        storeToLocale("myGoals", updatedGoals)
    }

    return (
        <>
            <main className={styles.goalSection}>
            <div className={showForm ? styles.contentBlur : ""}>
                <Navbar />
                <section>
                    <div className={styles.goals}>
                        <div className={styles.goalsHead}>
                            <p></p>
                            <h2>Long Term Goals</h2>
                            <RiAddBoxFill  onClick={() => setShowForm(x => !x)} className={styles.button} size={40}/>
                        </div>
                        <ul>
                            {myGoals.length === 0 ? <p><em>No goals yet</em></p> : (
                                myGoals.map((goal, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className={styles.delete}>
                                                <MdDelete className={styles.deleteButton} onClick={() => handleGoalDelete(idx)}/>
                                            </div>
                                            <div className={styles.descriPrice}>
                                                <h3>{goal.description}</h3>
                                                <p>Ksh {parseInt(goal.price).toLocaleString()}</p>
                                            </div>
                                            <div className={styles.actionPlan}>
                                                <h4>Action Plan</h4>
                                                <p>{goal.actionPlan}</p>
                                            </div>
                                            <div className={styles.shortComings}>
                                                <h4>Short Comings</h4>
                                                    <p>{goal.shortComings}</p>
                                            </div>
                                            <div className={styles.chart}>
                                                <h4>GAUGE CHART</h4>
                                                <p>current savings vs total price</p>
                                            </div>
                                        </li>
        
                                    )
                                }))}
                        </ul>
                    </div>
                </section>
                {/* <div>#polar area to see diferrence of my goal and what I currently have rn</div> */}

                {/* <Footer /> */}
            </div>

            {showForm && (
                <section className={styles.popupOverlay}>
                    <form className={styles.popup}>
                        <div className={styles.headers}>
                            <p></p>
                            <h2>Add Goals</h2>
                            <IoIosCloseCircle className={styles.iconClose} size={30} onClick={() => setShowForm(x => !x)} />
                        </div>
                        <div className={styles.formDetails}>
                            <div>
                                <label>Goal Description </label>
                                <input type="text" placeholder="Goal Description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div>
                                <label>Goal Price </label>
                                <input type="number" placeholder="How much the goal costs..." value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </div>
                            <div>
                                <label>Current Savings </label>
                                <input type="number" placeholder="How much have you saved so far..." value={savings} onChange={(e) => setSavings(e.target.value)}/>
                            </div>
                            <div>
                                <label>Action Plan </label>
                                <textarea rows={5} cols={32} value={action} onChange={(e) => setAction(e.target.value)}> </textarea>
                            </div>
                            <div>
                                <label>Short Comings </label>
                                <textarea rows={5} cols={32} value={sc} onChange={(e) => setSc(e.target.value)}> </textarea>
                            </div>
                            <button type="submit" onClick={(e) => handleSubmit(e)}>Add</button>
                        </div>
                    </form>
                </section>
                )}
            </main>
        </>
  )
}

