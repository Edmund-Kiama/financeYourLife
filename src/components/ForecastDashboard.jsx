import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/forecastDash.module.css"


import { useState, useEffect } from "react"

const now = new Date()
let finance = {
    jan : {
        month: "January",
        income: [
            { description: "Jan description", amount: 20000 }
        ],
        expense: [
            { description: "Jan description", amount: 5300 }
        ],
        difference: 100  
    },
    feb : {
        month: "February",
        income: [
            { description: "Feb description", amount: 140000 }
        ],
        expense: [
            { description: "Feb description", amount: 500 }
        ],
        difference: 100  
    },
    march : {
        month: "March",
        income: [
            { description: "March description", amount: 50000 }
        ],
        expense: [
            { description: "March description", amount: 2300 }
        ],
        difference: 100  
    },
    april : {
        month: "April",
        income: [
            { description: "April description", amount: 10000 }
        ],
        expense: [
            { description: "April description", amount: 200 }
        ],
        difference: 100  
    },
    may : {
        month: "May",
        income: [
            { description: "May description", amount: 10000 }
        ],
        expense: [
            { description: "May description", amount: 200 }
        ],
        difference: 100  
    },
    june : {
        month: "June",
        income: [
            { description: "June description", amount: 10000 }
        ],
        expense: [
            { description: "June description", amount: 200 }
        ],
        difference: 100  
    },
    july : {
        month: "July",
        income: [
            { description: "July description", amount: 10000 }
        ],
        expense: [
            { description: "July description", amount: 200 }
        ],
        difference: 100  
    },
    aug : {
        month: "August",
        income: [
            { description: "August description", amount: 10000 }
        ],
        expense: [
            { description: "August description", amount: 200 }
        ],
        difference: 100  
    },
    sept : {
        month: "September",
        income: [
            { description: "Sep description", amount: 10000 }
        ],
        expense: [
            { description: "Sep description", amount: 200 }
        ],
        difference: 100  
    },
    oct : {
        month: "October",
        income: [
            { description: "Oct description", amount: 10000 }
        ],
        expense: [
            { description: "Oct description", amount: 200 }
        ],
        difference: 100  
    },
    nov : {
        month: "November",
        income: [
            { description: "Nov description", amount: 10000 }
        ],
        expense: [
            { description: "Nov description", amount: 200 }
        ],
        difference: 100  
    },
    dec : {
        month: "December",
        income: [
            { description: "Dec description", amount: 10000 }
        ],
        expense: [
            { description: "Dec description", amount: 200000 }
        ],
        difference: 100
    }
}

export default function ForecastDash() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [monthData, setMonthData] = useState(null)
    const [targetIncome, setTargetIncome] = useState("")
    const [targetExpense, setTargetExpense] = useState("")
    const [editTargetIncome, setEditTargetIncome] = useState(true)
    const [editTargetExpense, setEditTargetExpense] = useState(true)
    const [totalIncomeMonthly, setTotalIncomeMonthly] = useState(null)
    const [totalExpenseMonthly, setTotalExpenseMonthly] = useState(null)
    const [ surplusDeficitMonthly, setSurplusDeficitMonthly] = useState("Surplus")
    const [ surplusDeficitMonthNumber, setSurplusDeficitMonthNumber] = useState("")

    const [addIncomeDescri, setAddIncomeDescri] = useState("")
    const [addExpenseDescri, setAddExpenseDescri] = useState("")
    
    const [addExpenseAmount, setAddExpenseAmount] = useState("")
    const [addIncomeAmount, setAddIncomeAmount] = useState("")

    const getFromLocale = (key) => {
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        } catch(error) {
            console.error("Error Ocurred getting item from locale: ", error)
            
        }
    }
    const storeToLocale = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error("Error on storing to locale: ", error )
            return null
        }
    }


    const totalFinancePerMonth = (financeMonth) => {
        let financeList = financeMonth.map(x => x.amount)

        let sum = 0
        for ( let i=0; i < financeList.length; i++) {
            sum += financeList[i]
        }
        return sum
    }

    const totalIncomeFx = (finance) => {
        let jan = totalFinancePerMonth(finance.jan.income)
        let feb = totalFinancePerMonth(finance.feb.income)
        let march = totalFinancePerMonth(finance.march.income)
        let april = totalFinancePerMonth(finance.april.income)
        let may = totalFinancePerMonth(finance.may.income)
        let june = totalFinancePerMonth(finance.june.income)
        let july = totalFinancePerMonth(finance.july.income)
        let august = totalFinancePerMonth(finance.aug.income)
        let sept = totalFinancePerMonth(finance.sept.income)
        let oct = totalFinancePerMonth(finance.oct.income)
        let nov = totalFinancePerMonth(finance.nov.income)
        let dec = totalFinancePerMonth(finance.dec.income)
        
        let sum = jan + feb + march + april + march +july + june + august + may + sept + oct + nov + dec
        return sum
    }
    
    const totalExpenseFx = (finance) => {
        let jan = totalFinancePerMonth(finance.jan.expense)
        let feb = totalFinancePerMonth(finance.feb.expense)
        let march = totalFinancePerMonth(finance.march.expense)
        let april = totalFinancePerMonth(finance.april.expense)
        let may = totalFinancePerMonth(finance.may.expense)
        let june = totalFinancePerMonth(finance.june.expense)
        let july = totalFinancePerMonth(finance.july.expense)
        let august = totalFinancePerMonth(finance.aug.expense)
        let sept = totalFinancePerMonth(finance.sept.expense)
        let oct = totalFinancePerMonth(finance.oct.expense)
        let nov = totalFinancePerMonth(finance.nov.expense)
        let dec = totalFinancePerMonth(finance.dec.expense)
        
        let sum = jan + feb + march + april + march +july + june + august + may + sept + oct + nov + dec
        return sum

    }

    const totalSurplusFx = () => {
        let income = totalIncomeFx(finance)
        let expense = totalExpenseFx(finance)

        return income - expense
    }


    const handleMonthClicked = (finance) => {
        setShowPopUp(true)
        setMonthData(finance)
        let totalIncome = totalFinancePerMonth(finance.income)
        let totalExpense = totalFinancePerMonth(finance.expense)

        setTotalIncomeMonthly(totalIncome)
        setTotalExpenseMonthly(totalExpense)

        let diff = totalIncome - totalExpense
        setSurplusDeficitMonthNumber(diff)
    
        if (diff >= 0) {
            setSurplusDeficitMonthly("Surplus")
        } else {
            setSurplusDeficitMonthly("Deficit")
        }
    }

    const handleAddIncome = (monthData) => {
        let income = {
            description: addIncomeDescri,
            amount: parseInt(addIncomeAmount)
        }
        setAddIncomeAmount("")
        setAddIncomeDescri("")

        monthData.income.push(income)

        handleMonthClicked(monthData)

    }

    const handleAddExpense = (monthData) => {
        let expense = {
            description: addExpenseDescri,
            amount: parseInt(addExpenseAmount)
        }
        setAddIncomeAmount("")
        setAddIncomeDescri("")

        monthData.expense.push(expense)

        handleMonthClicked(monthData)

    }

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
                                        <p>Current Income: Kshs {(totalIncomeFx(finance).toLocaleString())}</p>
                                        <p>Current Surplus: Kshs {(totalSurplusFx().toLocaleString())}</p>
                                    </div>
                                    <div className={styles.current}>
                                        <p>Current Expense: Kshs {(totalExpenseFx(finance).toLocaleString(0))}</p>
                                        <p>Current Month: {now.toLocaleString('default', {month:'long'})}</p>
                                    </div>
                                </div>

                                <div className={styles.target}>
                                    <div className={styles.current}>
                                            <p>Target Income: {targetIncome ? `Kshs ${parseInt(targetIncome).toLocaleString()}` : ""}
                                                <input type="text" onChange={(e) => setTargetIncome(e.target.value)} value={targetIncome} placeholder="Target Income" disabled={editTargetIncome}/>
                                                <button onClick={() => setEditTargetIncome(x => !x)}>{editTargetIncome ? "Edit": "Set"}</button>
                                            </p>
                                            <p>Target Surplus: {(targetIncome && targetExpense) ? `Kshs ${(targetIncome - targetExpense).toLocaleString() }`: ""}</p>
                                        </div>
                                        <div className={styles.current}>
                                            <p>Target Expense: {targetExpense ? `Kshs ${parseInt(targetExpense).toLocaleString()}` : ""}
                                                <input type="text" onChange={(e) => setTargetExpense(e.target.value)} value={targetExpense} placeholder="Target Expense" disabled={editTargetExpense}/>
                                                <button onClick={() => setEditTargetExpense(x => !x)}>{editTargetExpense ? "Edit": "Set"}</button>
                                                </p>
                                            <p></p>
                                        </div>
                                    </div>
                            </div>

                            <div className={styles.surplus}>
                                <p>Current Surplus / Target Surplus  :   : </p>
                                <p>{(totalSurplusFx()).toLocaleString()} / {(targetIncome && targetExpense) ? `${(targetIncome - targetExpense).toLocaleString() }`: ""}</p>
                            </div>
                        </div>


                        <div className={styles.monthsContainer}>
                            <div className={styles.monthSection}>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.jan)}}
                                >{ finance.jan.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.feb)}}
                                >{ finance.feb.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.march)}}
                                >{ finance.march.month }
                                </div>
                                <div    
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.april)}}
                                >{ finance.april.month }
                                </div>
                            </div>

                            <div className={styles.monthSection}>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.may)}}
                                >{ finance.may.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.june)}}
                                >{ finance.june.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.july)}}
                                >{ finance.july.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.aug)}}
                                >{ finance.aug.month }
                                </div>
                            </div>

                            <div className={styles.monthSection}>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.sept)}}
                                >{ finance.sept.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.oct)}}
                                >{ finance.oct.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.nov)}}
                                >{ finance.nov.month }
                                </div>
                                <div 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.dec)}}
                                >{ finance.dec.month }
                                </div>
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
                            <h2>{monthData.month}</h2>
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png" 
                                alt="close" 
                                className={styles.close}
                                onClick={() => {
                                    setShowPopUp(false)
                                    setMonthData("")
                                }}
                                />
                        </div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Total Income</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { totalIncomeMonthly.toLocaleString() }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Total Expense</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { totalExpenseMonthly.toLocaleString() }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>{ surplusDeficitMonthly.toLocaleString() }</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { surplusDeficitMonthNumber.toLocaleString() }</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.income}>
                            <div className={styles.popupMiniDetails}>
                                <p>x</p>
                                <p>Total Income</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" value={addIncomeDescri} onChange={(e) => setAddIncomeDescri(e.target.value)}/>
                                <input type="number" placeholder="Amount" value={addIncomeAmount} onChange={(e) => setAddIncomeAmount(e.target.value)}/>
                                <button onClick={() => handleAddIncome(monthData)}>Add Income</button>
                            </div>
                            <div className={styles.incomeList}>
                                {
                                    monthData.income.map((x, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{ x.description }</p>
                                                <p>Ksh { (x.amount).toLocaleString() }</p>
                                                <button>Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={styles.expense}>
                            <div className={styles.popupMiniDetails}>
                                <p>x</p>
                                <p>Total Expense</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" value={addExpenseDescri} onChange={(e) => setAddExpenseDescri(e.target.value)}/>
                                <input type="number" placeholder="Amount" value={addExpenseAmount} onChange={(e) => setAddExpenseAmount(e.target.value)}/>
                                <button onClick={() => handleAddExpense(monthData)}>Add Expense</button>
                            </div>
                            <div className={styles.expenseList}>
                                {
                                    monthData.expense.map((x, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{ x.description }</p>
                                                <p>Ksh { (x.amount.toLocaleString()) }</p>
                                                <button>Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>
                </section>
            )}
        </>
  )
}

