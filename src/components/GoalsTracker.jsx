import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/goal.module.css"

import { MdDelete } from "react-icons/md";

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
    }

    const handleGoalDelete = (index) => {
        let updatedGoals = myGoals.filter((goal,idx) => idx !== index)

        setMyGoals(updatedGoals)
        storeToLocale("myGoals", updatedGoals)
    }

    return (
        <>
            <main>
                <Navbar />
                <section className={styles.goalSection}>
                    <form className={styles.form}>
                        <h2>Add Goals</h2>
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
                    </form>

                    <div className={styles.goals}>
                        <h2>My Goals</h2>
                        <ul>
                            {myGoals.map((goal, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className={styles.delete}>
                                            <MdDelete className={styles.deleteButton} onClick={() => handleGoalDelete(idx)}/>
                                        </div>
                                        <div className={styles.descriPrice}>
                                            <h3>{goal.description}</h3>
                                            <p>Ksh {goal.price}</p>
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
                            })}
                        </ul>
                    </div>
                </section>
                {/* <div>#polar area to see diferrence of my goal and what I currently have rn</div> */}

                <Footer />
            </main>
        </>
  )
}

