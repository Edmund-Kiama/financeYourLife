import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/spenders.module.css"

import { RiAddBoxFill } from "react-icons/ri";

export default function BiggestSpenders() {

    return (
        <>
            <main>
                <Navbar />
                <section className={styles.spenders}>
                    <h2>My Biggest purchases</h2>
                    <div className={styles.add}>
                        <input type="text" placeholder="description"/>
                        <input type="number" placeholder="Amount spent"/>
                        <input type="date" />
                        <RiAddBoxFill size={30} className={styles.button}/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Bike</th>
                                <th>2m</th>
                                <th>2024</th>
                            </tr>
                            <tr>
                                <th>Bike</th>
                                <th>2m</th>
                                <th>2024</th>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    
                    <div>#Pie chart of my biggest money eaters</div>
                    
                    <h2>Common Biggest Spenders</h2>
                    <ol>
                        <li>Foods & Drinks</li>
                        <li>Alcohol & Drugs</li>
                        <li>Clothes</li>
                        <li>House, Fuel & Power</li>
                        <li>Household Goods</li>
                        <li>Restaraunts & Hotels</li>
                        <li>Missaleneous Goods</li>
                        <li>Outdoor Activity & Events</li>
                    </ol>

                </section>

                {/* <Footer /> */}
            </main>
        </>
  )
}

