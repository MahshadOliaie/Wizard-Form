import { useState } from "react"
import ActivityLevel from "./components/ActivityLevel/ActivityLevel"
import GoalSelector from "./components/GoalSelector/GoalSelector"
import NextBtn from "./components/NextBtn/NextBtn"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo"
import PhysicalInfo from "./components/PhysicalInfo/PhysicalInfo"
import StepBar from "./components/StepBar/StepBar"
import Information from "./context/Information/Information"

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
          {/* <PersonalInfo /> */}
          {/* <PhysicalInfo /> */}
          <ActivityLevel/>
          {/* <GoalSelector /> */}
        </div>
      </Information.Provider>
    </>
  )
}

export default App