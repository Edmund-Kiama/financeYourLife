import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/monthlyCheckIn.module.css"
import defaultFinance from "../finance"

import { useState, useEffect } from "react";

import { HiArrowLongRight } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const currentGoalList = [
    "Buy a 250cc Bike.",
    "Buy a PlayStation 5 Slim",
    "Buy an Ipad Pro M4 chip"
]

export default function MonthlyCheckIns() {
    const [finance, setFinance] = useState(() => {
        const stored = localStorage.getItem("finance")
        return stored ? JSON.parse(stored) : defaultFinance
    })
    const [editPercent1, setEditPercent1] = useState(true)
    const [editPercent2, setEditPercent2] = useState(true)
    const [editPercent3, setEditPercent3] = useState(true)

    const [investPerc, setInvestPerc] = useState(() => {
        let stored = localStorage.getItem("monthlyInvestPerc")
        return stored ? JSON.parse(stored) : ""
    })
    const [goalPerc, setGoalPerc] = useState(() => {
        let stored = localStorage.getItem("monthlyGoalPerc")
        return stored ? JSON.parse(stored) : ""
    })
    const [funPerc, setFunPerc] = useState(() => {
        let stored = localStorage.getItem("monthlyFunPerc")
        return stored ? JSON.parse(stored) : ""
    })

    const [invest, setInvest] = useState(() => {
        let stored = localStorage.getItem("monthlyInvest")
        return stored ? JSON.parse(stored) : ""
    })
    const [goal, setGoal] = useState(() => {
        let stored = localStorage.getItem("monthlyGoal")
        return stored ? JSON.parse(stored) : ""
    })
    const [fun, setFun] = useState(() => {
        let stored = localStorage.getItem("monthlyFun")
        return stored ? JSON.parse(stored) : ""
    })

    const [goalList, setGoalList] = useState(() => {
        let stored = localStorage.getItem("monthlyGoalList")
        return stored ? JSON.parse(stored) : currentGoalList
    })
    const [goalListItem, setGoalListItem] =useState("")

    const [addExpenseAmount, setAddExpenseAmount] = useState("")
    const [addExpenseDescri, setAddExpenseDescri] = useState("")


    const storeToLocale = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error("Error on storing to locale: ", error )
            return null
        }
    }

    
    useEffect(()=> {
        setGoal(goalPerc * totalIncome / 100)
    }, [goalPerc])

    useEffect(()=> {
        setFun(funPerc * totalIncome / 100)
    }, [funPerc])
    
    const now = new Date()
    const month = now.toLocaleString('default', {month:'long'}).toLowerCase()
    
    const income = finance[month].income
    const expense = finance[month].expense
    const difference = finance[month].difference

    const totalIncome = income.reduce((acc, val) => acc + val.amount, 0)

    useEffect(()=> {
        const totalInvestments = (investPerc * totalIncome) / 100
        setInvest(`${totalInvestments}`)

        storeToLocale("monthlyInvest", invest)
        storeToLocale("monthlyInvestPerc", investPerc)

    }, [investPerc, totalIncome])

    useEffect(()=> {
        const totalGoal = (goalPerc * totalIncome) / 100
        setGoal(`${totalGoal}`)

        storeToLocale("monthlyGoal", goal)
        storeToLocale("monthlyGoalPerc", goalPerc)

    }, [goalPerc, totalIncome])

    useEffect(()=> {
        const totalFun = (funPerc * totalIncome) / 100
        setFun(`${totalFun}`)

        storeToLocale("monthlyFun", fun)
        storeToLocale("monthlyFunPerc", funPerc)

    }, [funPerc, totalIncome])

    const handleAddingGoals = () => {
        const list = [...goalList]
        list.push(goalListItem)

        setGoalList(list)

        storeToLocale("monthlyGoalList", goalList)
    }

    const handleAddExpense = () => {
        let newExpense = {
            description: addExpenseDescri,
            amount: parseInt(addExpenseAmount)
        }
        setAddExpenseAmount("")
        setAddExpenseDescri("")

        let updated = {
            ...finance[month],
            expense: [...finance[month].expense, newExpense]
        }

        finance[month] = updated

        setFinance(prev => ({
            ...prev,
            [month.toLowerCase()]: updated
        }))

        storeToLocale("finance", finance)
    }

    const handleDeleteExpense = (index) => {
        
        let updatedMonth = {
            ...finance[month],
            expense: finance[month].expense.filter((_, i) => i !== index)
          };

        let updatedFinance = {
            ...finance,
            [month.toLowerCase()]: updatedMonth
        }
        
        setFinance(updatedFinance)
        
        storeToLocale("finance", updatedFinance)
    }

    return (
        <>
            <main className={styles.checksins}>
                <Navbar />
                <section className={styles.mainContainer}>
                    <section className={styles.topContainer}>
                        <h2>{finance[month].month} Check-In</h2>
                        <p>pie chart</p>
                        <ul>
                            <li>
                                <div>
                                    <p>Total Monthly Income</p>
                                    <HiArrowLongRight/>
                                    <p> Kshs {parseInt(totalIncome).toLocaleString()} </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    {/* <p>50%</p> */}
                                    <section className={styles.input}>
                                        <input type="number" 
                                        onChange={(e) => setInvestPerc(e.target.value)} 
                                        min="0"
                                        max="100"
                                        value={investPerc} 
                                        placeholder="investments: 50%" 
                                        disabled={editPercent1}
                                        />%
                                        <button 
                                        onClick={() => setEditPercent1(x => !x)}>{editPercent1 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p>Kshs {parseInt(invest).toLocaleString()}</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                     <section className={styles.input}>
                                        <input type="number" 
                                        onChange={(e) => setGoalPerc(e.target.value)} 
                                        min="0"
                                        max="100"
                                        value={goalPerc} 
                                        placeholder="goals: 30%" 
                                        disabled={editPercent2}
                                        />%
                                        <button 
                                        onClick={() => setEditPercent2(x => !x)}>{editPercent2 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p> Kshs {parseInt(goal).toLocaleString()} </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <section className={styles.input}>
                                        <input type="number" 
                                        onChange={(e) => setFunPerc(e.target.value)} 
                                        min="0"
                                        max="100"
                                        value={funPerc} 
                                        placeholder="fun: 20%" 
                                        disabled={editPercent3}
                                        />%
                                        <button 
                                        onClick={() => setEditPercent3(x => !x)}>{editPercent3 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p> Kshs {parseInt(fun).toLocaleString()} </p>
                                </div>
                            </li>
                        </ul>
                        {parseInt(funPerc) + parseInt(investPerc) + parseInt(goalPerc) === 100 ? "" : <p style={{color:"red"}}>Does not equal <strong>100%</strong></p>}
                    </section>

                    <section className={styles.midContainer}>
                        <h2>{finance[month].month} Cost So Far</h2>
                        <div className={styles.inputs}>
                                <input type="text" placeholder="Description" className={styles.add}
                                    value={addExpenseDescri} onChange={(e) => setAddExpenseDescri(e.target.value)}
                                />
                                <input type="number" placeholder="Amount" className={styles.add}
                                    value={addExpenseAmount} onChange={(e) => setAddExpenseAmount(e.target.value)}
                                />
                            <RiAddBoxFill size={30} className={styles.add} onClick={handleAddExpense}/>

                            </div>
                        <ul>
                            {expense.map((x, idx) => {
                                return (
                                    <li key={idx} className={styles.expenseli}>
                                        <p>{x.description}</p>
                                        <HiArrowLongRight/>
                                        <p>Kshs {(x.amount).toLocaleString()}</p>
                                        <MdDelete className={styles.deleteb} onClick={() => handleDeleteExpense(idx)}/>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>
                                {expense.length >= 1 ? (
                                    <>
                                        <p>Total</p>
                                        <p>Kshs {expense.reduce((acc, val) => parseInt(val.amount) + acc, 0)}</p>
                                    </>
                                ) : "No expenses so far!"}
                                {/* <p>Total</p>
                                <p>Ksh 200,000</p> */}
                            </li>
                        </ul>
                    </section>
                </section>

                <section className={styles.bottomContainer}>
                    <h2>{finance[month].month} Goals</h2>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Add Goal..."
                            value={goalListItem}
                            onChange={e => setGoalListItem(e.target.value)}
                            className={styles.add}/>
                        <RiAddBoxFill size={30} className={styles.add} onClick={handleAddingGoals}/>
                    </div>
                    <ol>
                        {goalList.map(item => <li>{item}</li>)}
                    </ol>
                </section>

                <Footer />
            </main>
        </>
  )
}

