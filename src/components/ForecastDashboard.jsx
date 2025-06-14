import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/forecastDash.module.css"
import defaultFinance from "../finance"

import { PiTrendDownBold } from "react-icons/pi";
import { TbPlusMinus } from "react-icons/tb";
import { PiTrendUpBold } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import { MdEdit } from "react-icons/md";

import { useState, useEffect } from "react"
import BarChart from "../charts/SurplusBarChart";
import GaugeChart from "../charts/SurplusTargetGaugeChart";

const now = new Date()

export default function ForecastDash() {

    const [finance, setFinance] = useState(() => {
        const stored = localStorage.getItem("finance")
        return stored ? JSON.parse(stored) : defaultFinance
    }) 

    const [targetIncome, setTargetIncome] = useState(() => {
        const stored = localStorage.getItem("targetIncome")
        return stored ? JSON.parse(stored) : ""
    })

    const [targetExpense, setTargetExpense] = useState(() => {
        const stored = localStorage.getItem("targetExpense")
        return stored ? JSON.parse(stored) : ""
    })

    const [showPopUp, setShowPopUp] = useState(false)
    const [monthData, setMonthData] = useState(null)
    const [currentYear, setCurrentYear] = useState(2025)
    const [editTargetIncome, setEditTargetIncome] = useState(true)
    const [editTargetExpense, setEditTargetExpense] = useState(true)
    const [editCurrentYear, setEditCurrentYear] = useState(true)
    const [totalIncomeMonthly, setTotalIncomeMonthly] = useState(null)
    const [totalExpenseMonthly, setTotalExpenseMonthly] = useState(null)
    const [ surplusDeficitMonthly, setSurplusDeficitMonthly] = useState("Surplus")
    const [ surplusDeficitMonthNumber, setSurplusDeficitMonthNumber] = useState("")

    const [addIncomeDescri, setAddIncomeDescri] = useState("")
    const [addExpenseDescri, setAddExpenseDescri] = useState("")
    
    const [addExpenseAmount, setAddExpenseAmount] = useState("")
    const [addIncomeAmount, setAddIncomeAmount] = useState("")


    // const getFromLocale = (key) => {
    //     try {
    //         const data = localStorage.getItem(key)
    //         return data ? JSON.parse(data) : null
    //     } catch(error) {
    //         console.error("Error Ocurred getting item from locale: ", error)     
    //     }
    // }

    const storeToLocale = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error("Error on storing to locale: ", error )
            return null
        }
    }



    useEffect(() => {
        storeToLocale("finance", finance)
        totalSurplusFx()
    }, [ finance ])

    useEffect(() => {
        storeToLocale("targetIncome", targetIncome)
    }, [ targetIncome ])

    useEffect(() => {
        storeToLocale("targetExpense", targetExpense)
    }, [ targetExpense ])

    useEffect(() => {
        totalSurplusFx()
    }, [ monthData ])




    const totalFinancePerMonth = (financeMonth) => {
        let financeList = financeMonth.map(x => x.amount)

        let sum = 0
        for ( let i=0; i < financeList.length; i++) {
            sum += financeList[i]
        }
        return sum
    }

    const totalIncomeFx = (finance) => {
        let jan = totalFinancePerMonth(finance.january.income)
        let feb = totalFinancePerMonth(finance.february.income)
        let march = totalFinancePerMonth(finance.march.income)
        let april = totalFinancePerMonth(finance.april.income)
        let may = totalFinancePerMonth(finance.may.income)
        let june = totalFinancePerMonth(finance.june.income)
        let july = totalFinancePerMonth(finance.july.income)
        let august = totalFinancePerMonth(finance.august.income)
        let sept = totalFinancePerMonth(finance.september.income)
        let oct = totalFinancePerMonth(finance.october.income)
        let nov = totalFinancePerMonth(finance.november.income)
        let dec = totalFinancePerMonth(finance.december.income)
        
        let sum = jan + feb + march + april + march +july + june + august + may + sept + oct + nov + dec

        return sum
    }
    
    const totalExpenseFx = (finance) => {
        let jan = totalFinancePerMonth(finance.january.expense)
        let feb = totalFinancePerMonth(finance.february.expense)
        let march = totalFinancePerMonth(finance.march.expense)
        let april = totalFinancePerMonth(finance.april.expense)
        let may = totalFinancePerMonth(finance.may.expense)
        let june = totalFinancePerMonth(finance.june.expense)
        let july = totalFinancePerMonth(finance.july.expense)
        let august = totalFinancePerMonth(finance.august.expense)
        let sept = totalFinancePerMonth(finance.september.expense)
        let oct = totalFinancePerMonth(finance.october.expense)
        let nov = totalFinancePerMonth(finance.november.expense)
        let dec = totalFinancePerMonth(finance.december.expense)
        
        let sum = jan + feb + march + april + march +july + june + august + may + sept + oct + nov + dec

        return sum

    }

    const totalSurplusFx = () => {
        let income = totalIncomeFx(finance)
        let expense = totalExpenseFx(finance)

        let surplus = income - expense

        return surplus
    }


    const handleMonthClicked = (monthKey) => {
        setShowPopUp(true)
        setMonthData(monthKey)
        let totalIncome = totalFinancePerMonth(monthKey.income)
        let totalExpense = totalFinancePerMonth(monthKey.expense)

        setTotalIncomeMonthly(totalIncome)
        setTotalExpenseMonthly(totalExpense)

        let diff = totalIncome - totalExpense
        finance[monthKey.month.toLowerCase()].difference = diff
        setFinance(prev => ({
            ...prev,
            [monthKey.month.toLowerCase()]: {
                ...prev[monthKey.month.toLowerCase()],
                difference: diff
            }
        }))
        setSurplusDeficitMonthNumber(diff)
    
        if (diff >= 0) {
            setSurplusDeficitMonthly("Surplus")
        } else {
            setSurplusDeficitMonthly("Deficit")
        }
    }

    const handleAddIncome = (monthData, month) => {
        let newIncome = {
            description: addIncomeDescri,
            amount: parseInt(addIncomeAmount)
        }
        setAddIncomeAmount("")
        setAddIncomeDescri("")

        let updated = {
            ...monthData,
            income: [...monthData.income, newIncome]
        }
        setMonthData(updated)

        finance[month] = updated
        setFinance(prev => ({
            ...prev,
            [month.toLowerCase()]: updated
        }))

        handleMonthClicked(updated)
    }

    const handleAddExpense = (monthData, month) => {
        let newExpense = {
            description: addExpenseDescri,
            amount: parseInt(addExpenseAmount)
        }
        setAddExpenseAmount("")
        setAddExpenseDescri("")

        let updated = {
            ...monthData,
            expense: [...monthData.expense, newExpense]
        }
        setMonthData(updated)

        finance[month] = updated

        setFinance(prev => ({
            ...prev,
            [month.toLowerCase()]: updated
        }))

        handleMonthClicked(updated)
    }

    const handleDeleteIncome = (monthData, index) => {
        
        let updatedMonth;
        
        setFinance(prev => {
            const month = prev[monthData.month.toLowerCase()];
            updatedMonth = {
              ...month,
              income: month.income.filter((cost, idx) => idx !== index)
            };

            setMonthData(updatedMonth)
            handleMonthClicked(updatedMonth)
        
            return {
              ...prev,
              [monthData.month.toLowerCase()]: updatedMonth
            };
        });
    }

    const handleDeleteExpense = (monthData, index) => {
        
        let updatedMonth;
        
        setFinance(prev => {
            const month = prev[monthData.month.toLowerCase()];
            updatedMonth = {
              ...month,
              expense: month.expense.filter((cost, idx) => idx !== index)
            };

            setMonthData(updatedMonth)
            handleMonthClicked(updatedMonth)
        
            return {
              ...prev,
              [monthData.month.toLowerCase()]: updatedMonth
            };
        });
    }

    return (
        <div className={styles.mainDash}>
            <main className={showPopUp ? styles.contentBlur : "" } >
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.mainContainer}>
                        
                        <div className={styles.detailsContainer}>


                            <div className={styles.details}>
                                <div className={styles.mainCurrent}>
                                    <h2>Current</h2>
                                    <div className={styles.current}>
                                        <p>Income: Kshs {(totalIncomeFx(finance).toLocaleString())}</p>
                                        <p> Expense: Kshs {(totalExpenseFx(finance).toLocaleString())}</p>
                                    </div>
                                    <div className={styles.current}>
                                        <p>Surplus: Kshs {(totalSurplusFx().toLocaleString())}</p>
                                        <p> Month: {now.toLocaleString('default', {month:'long'})}</p>
                                    </div>
                                </div>

                                <div className={styles.target}>
                                    <h2>Target</h2>
                                    <div className={styles.current}>
                                            <p>Income: {targetIncome ? `Kshs ${parseInt(targetIncome).toLocaleString()}` : ""}
                                                <input type="text" onChange={(e) => setTargetIncome(e.target.value)} value={targetIncome} placeholder="Target Income" disabled={editTargetIncome}/>
                                                <button onClick={() => setEditTargetIncome(x => !x)}>{editTargetIncome ?  <MdEdit /> : <SiTicktick />}</button>
                                             </p>
                                             <p>Expense: {targetExpense ? `Kshs ${parseInt(targetExpense).toLocaleString()}` : ""}
                                               <input type="text" onChange={(e) => setTargetExpense(e.target.value)} value={targetExpense} placeholder="Target Expense" disabled={editTargetExpense}/>
                                                <button onClick={() => setEditTargetExpense(x => !x)}>{editTargetExpense ? <MdEdit /> : <SiTicktick />}</button>
                                               </p>
                                        </div>
                                        <div className={styles.current}>
                                        <p>Surplus: {(targetIncome && targetExpense) ? `Kshs ${(targetIncome - targetExpense).toLocaleString() }`: ""}</p>
                                            <p></p>
                                        </div>
                                    </div>
                            </div>


                            <div className={styles.charts}>
                                <div className={styles.gaugeChart}>
                                    <GaugeChart finance={finance}/>
                                </div>
                            </div>


                            <div className={styles.charts}>
                                <div className={styles.barChart}>
                                    <BarChart finance={finance} />
                                </div>
                            </div>

                        </div>


                        <div className={styles.monthsContainer}>
                            <div>
                                <input type="number" onChange={(e) => setCurrentYear(e.target.value)} value={currentYear} placeholder="Current Year" disabled={editCurrentYear}/>
                                <button onClick={() => setEditCurrentYear(x => !x)}>{editCurrentYear ? <MdEdit /> : <SiTicktick />}</button>
                                <h2>Year: {currentYear}</h2>
                            </div>
                            <div className={styles.monthSection}>
                                <p
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.january)}}
                                >{ finance.january.month }
                                </p>
                                <p
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.february)}}
                                >{ finance.february.month }
                                </p>
                                <p
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.march)}}
                                >{ finance.march.month }
                                </p>
                                <p    
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.april)}}
                                >{ finance.april.month }
                                </p>
                            </div>

                            <div className={styles.monthSection}>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.may)}}
                                >{ finance.may.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.june)}}
                                >{ finance.june.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.july)}}
                                >{ finance.july.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.august)}}
                                >{ finance.august.month }
                                </p>
                            </div>

                            <div className={styles.monthSection}>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.september)}}
                                >{ finance.september.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.october)}}
                                >{ finance.october.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.november)}}
                                >{ finance.november.month }
                                </p>
                                <p 
                                    className={styles.months} 
                                    onClick={() => {handleMonthClicked(finance.december)}}
                                >{ finance.december.month }
                                </p>
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
                                    <PiTrendUpBold />
                                    <p>Total Income</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { totalIncomeMonthly.toLocaleString() }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <PiTrendDownBold />
                                    <p>Total Expense</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { totalExpenseMonthly.toLocaleString() }</p>
                                </div>
                            </div>

                            <div className={styles.popupSubDetails}>
                                <div className={styles.popupMiniDetails}>
                                    <TbPlusMinus />
                                    <p>{ surplusDeficitMonthly.toLocaleString() }</p>
                                </div>
                                <div className={styles.number}>
                                    <p>Ksh { surplusDeficitMonthNumber.toLocaleString() }</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.income}>
                            <div className={styles.popupMiniDetails}>
                                <PiTrendUpBold />
                                <p>Total Income</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" value={addIncomeDescri} onChange={(e) => setAddIncomeDescri(e.target.value)}/>
                                <input type="number" placeholder="Amount" value={addIncomeAmount} onChange={(e) => setAddIncomeAmount(e.target.value)}/>
                                <button onClick={() => handleAddIncome(monthData, monthData.month)}>Add Income</button>
                            </div>
                            <div className={styles.incomeList}>
                                {
                                    monthData.income.map((x, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{ x.description }</p>
                                                <p>Ksh { (x.amount).toLocaleString() }</p>
                                                <button onClick={() => handleDeleteIncome(monthData, index)}>Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={styles.expense}>
                            <div className={styles.popupMiniDetails}>
                                <PiTrendDownBold />
                                <p>Total Expense</p>
                            </div>
                            <div className={styles.inputs}>
                                <input type="text" placeholder="Description" value={addExpenseDescri} onChange={(e) => setAddExpenseDescri(e.target.value)}/>
                                <input type="number" placeholder="Amount" value={addExpenseAmount} onChange={(e) => setAddExpenseAmount(e.target.value)}/>
                                <button onClick={() => handleAddExpense(monthData, monthData.month)}>Add Expense</button>
                            </div>
                            <div className={styles.expenseList}>
                                {
                                    monthData.expense.map((x, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{ x.description }</p>
                                                <p>Ksh { (x.amount.toLocaleString()) }</p>
                                                <button onClick={() => handleDeleteExpense(monthData, index)} >Delete</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>
                </section>
            )}
        </div>
  )
}

