import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/monthlyCheckIn.module.css"

import { useState } from "react";

import { HiArrowLongRight } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";

export default function MonthlyCheckIns() {
    const [editPercent1, setEditPercent1] = useState(true)
    const [editPercent2, setEditPercent2] = useState(true)
    const [editPercent3, setEditPercent3] = useState(true)

    return (
        <>
            <main>
                <Navbar />
                <section className={styles.mainContianer}>
                    <section className={styles.topContainer}>
                        <h2>June Check-In</h2>
                        <p>pie chart</p>
                        <ul>
                            <li>
                                <div>
                                    <p>Total Monthly Income</p>
                                    <HiArrowLongRight/>
                                    <p> Kshs 200,000 </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    {/* <p>50%</p> */}
                                    <section className={styles.input}>
                                        <input type="number" 
                                        // onChange={(e) => setTargetIncome(e.target.value)} 
                                        // value={targetIncome} 
                                        placeholder="investments: 50%" 
                                        disabled={editPercent1}
                                        />
                                        <button 
                                        onClick={() => setEditPercent1(x => !x)}>{editPercent1 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p> Kshs 200,000 </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                     <section className={styles.input}>
                                        <input type="number" 
                                        // onChange={(e) => setTargetIncome(e.target.value)} 
                                        // value={targetIncome} 
                                        placeholder="goals: 30%" 
                                        disabled={editPercent2}
                                        />
                                        <button 
                                        onClick={() => setEditPercent2(x => !x)}>{editPercent2 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p> Kshs 200,000 </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <section className={styles.input}>
                                        <input type="number" 
                                        // onChange={(e) => setTargetIncome(e.target.value)} 
                                        // value={targetIncome} 
                                        placeholder="fun: 20%" 
                                        disabled={editPercent3}
                                        />
                                        <button 
                                        onClick={() => setEditPercent3(x => !x)}>{editPercent3 ?  <MdEdit /> : <SiTicktick />}
                                        </button>
                                    </section>
                                    <HiArrowLongRight/>
                                    <p> Kshs 200,000 </p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.midContainer}>
                        <h2>June Cost So Far</h2>
                        <div className={styles.inputs}>
                                <input type="text" placeholder="Description" className={styles.add}
                                    // value={addIncomeDescri} onChange={(e) => setAddIncomeDescri(e.target.value)}
                                    />
                                <input type="number" placeholder="Amount" className={styles.add}
                                    // value={addIncomeAmount} onChange={(e) => setAddIncomeAmount(e.target.value)}
                                    />
                            <RiAddBoxFill size={30} className={styles.add}/>

                            </div>
                        <ul>
                            <li>
                                <p>Description</p>
                                <p>Amount</p>
                            </li>
                            <li>
                                <p>Description</p>
                                <p>Amount</p>
                            </li>
                            <li>
                                <p>Description</p>
                                <p>Amount</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Total</p>
                                <p>Ksh 200,000</p>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className={styles.bottomContainer}>
                    <h2>Current Goals</h2>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Add Goal..."
                            className={styles.add}/>
                        <RiAddBoxFill size={30} className={styles.add}/>
                    </div>
                    <ol>
                        <li>250cc Bike</li>
                        <li>Play Station 5 Slim</li>
                        <li>Ipad Pro M4</li>
                    </ol>
                </section>

                <Footer />
            </main>
        </>
  )
}

