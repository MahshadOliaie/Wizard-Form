import { useState } from "react"
import ActivityLevel from "./components/ActivityLevel/ActivityLevel"
import GoalSelector from "./components/GoalSelector/GoalSelector"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo"
import PhysicalInfo from "./components/PhysicalInfo/PhysicalInfo"
import StepBar from "./components/StepBar/StepBar"
import Information from "./context/Information/Information"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [physicalInfo, setPhysicalInfo] = useState({})
  const [activityLevel, setActivityLevel] = useState("")
  const [goal, setGoal] = useState("")


  return (
    <>
      <Information.Provider value={{
        personalInfo,
        setPersonalInfo,
        physicalInfo,
        setPhysicalInfo,
        activityLevel,
        setActivityLevel,
        goal,
        setGoal
      }}>
        <StepBar />
        <div className="flex flex-col mx-auto w-4/5 ps-5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/2" element={<PhysicalInfo />} />
              <Route path="/3" element={<ActivityLevel />} />
              <Route path="/4" element={<GoalSelector />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Information.Provider>
    </>
  )
}

export default App