import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/forecastDash.module.css"

import { useState } from "react"


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
            { description: "Dec description", amount: 200 }
        ],
        difference: 100  
    }
}

export default function ForecastDash() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [monthData, setMonthData] = useState(null)
    const [totalIncomeMonthly, setTotalIncomeMonthly] = useState(null)
    const [totalExpenseMonthly, setTotalExpenseMonthly] = useState(null)
    const [ surplusDeficitMonthly, setSurplusDeficitMonthly] = useState("Surplus")

    const surplusDeficitPerMonth = ( income, expense ) => {
        let totalIncome = totalFinancePerMonth(income)
        let totalExpense = totalFinancePerMonth(expense)
    
        let diff = totalIncome - totalExpense
    
        if (diff >= 0) {
            setSurplusDeficitMonthly("Surplus")
        } else {
            setSurplusDeficitMonthly("Deficit")
        }
    
        return diff
    }

    const totalFinancePerMonth = (financeMonth) => {
        let financeList = financeMonth.map(x => x.amount)

        let sum = 0
        for ( let i=0; i < financeList.length; i++) {
            sum += financeList[i]
        }
        return sum
    }

    const handleMonthClicked = (finance) => {
        setShowPopUp(true)
        setMonthData(finance)
        let totalIncome = totalFinancePerMonth(finance.income)
        let totalExpense = totalFinancePerMonth(finance.expense)

        setTotalIncomeMonthly(totalIncome)
        setTotalExpenseMonthly(totalExpense)

        let diff = totalIncome - totalExpense
    
        if (diff >= 0) {
            setSurplusDeficitMonthly("Surplus")
        } else {
            setSurplusDeficitMonthly("Deficit")
        }
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
                                <div>
                                    <p>Ksh { totalIncomeMonthly }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>Total Expense</p>
                                </div>
                                <div>
                                    <p>Ksh { totalExpenseMonthly }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <p>x</p>
                                    <p>{ surplusDeficitMonthly }</p>
                                </div>
                                <div>
                                    <p>Ksh { surplusDeficitMonthly }</p>
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
                                {
                                    monthData.income.map((x) => {
                                        return (
                                            <>
                                                <p>{ x.description }</p>
                                                <p>Ksh { x.amount }</p>
                                            </>
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
                                <input type="text" placeholder="Description" />
                                <input type="number" placeholder="Amount" />
                                <button>Add Expense</button>
                            </div>
                            <div className={styles.expenseList}>
                                {
                                    monthData.expense.map((x) => {
                                        return (
                                            <>
                                                <p>{ x.description }</p>
                                                <p>Ksh { x.amount }</p>
                                            </>
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

