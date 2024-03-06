import ActivityLevel from "./components/ActivityLevel/ActivityLevel"
import GoalSelector from "./components/GoalSelector/GoalSelector"
import NextBtn from "./components/NextBtn/NextBtn"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo"
import PhysicalInfo from "./components/PhysicalInfo/PhysicalInfo"
import StepBar from "./components/StepBar/StepBar"

function App() {
  return (
    <>
      <StepBar />
      <div className="flex flex-col mx-auto w-4/5 ps-5">
        <PersonalInfo />
        {/* <PhysicalInfo /> */}
        {/* <ActivityLevel/> */}
        {/* <GoalSelector /> */}
      </div>
      <NextBtn />
    </>
  )
}

export default App