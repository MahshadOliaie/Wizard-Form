import { useState } from "react"
import ActivityLevel from "./components/ActivityLevel/ActivityLevel"
import GoalSelector from "./components/GoalSelector/GoalSelector"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo"
import PhysicalInfo from "./components/PhysicalInfo/PhysicalInfo"
import StepBar from "./components/StepBar/StepBar"
import Information from "./context/Information/Information"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShowCalory from "./components/ShowCalory/ShowCalory"

function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [physicalInfo, setPhysicalInfo] = useState({})
  const [activityLevel, setActivityLevel] = useState("")
  const [goal, setGoal] = useState("")
  const [step, setStep] = useState("/")


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
        <StepBar step={step} />
        <div className="flex flex-col mx-auto w-4/5 ps-5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/2" element={<PhysicalInfo setStep={setStep} />} />
              <Route path="/3" element={<ActivityLevel setStep={setStep} />} />
              <Route path="/4" element={<GoalSelector setStep={setStep} />} />
              <Route path="/result" element={<ShowCalory />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Information.Provider>
    </>
  )
}

export default App