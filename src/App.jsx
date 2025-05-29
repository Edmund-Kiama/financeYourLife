import { BrowserRouter, Routes, Route, Router } from "react-router"

import ForecastDash from "./components/ForecastDashboard"
import "./styles/app.css"
import MonthlyCheckIns from "./components/MonthlyCheckIns"
import NetWorthAndDebt from "./components/NetWorth&Debt"
import SavingsAndInvestments from "./components/Savings&Investments"
import GoalsTracker from "./components/GoalsTracker"
import BiggestSpenders from "./components/BiggestSpenders"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForecastDash />} />
          <Route path="/monthly-check-ins" element={<MonthlyCheckIns />} />
          <Route path="/net-worth-&-debt" element={<NetWorthAndDebt />} />
          <Route path="/savings-&-investments" element={<SavingsAndInvestments />} />
          <Route path="/goals-tracker" element={<GoalsTracker />} />
          <Route path="/biggest-spenders" element={<BiggestSpenders />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
