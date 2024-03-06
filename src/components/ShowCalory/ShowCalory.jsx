import { useContext } from "react"
import Information from "../../context/Information/Information"


function ShowCalory(){
    const {physicalInfo , goal , activityLevel} = useContext(Information)
    let formula = (10* physicalInfo.weight)+ (6.25*physicalInfo.height)-(5*physicalInfo.age)
    console.log(activityLevel.activityLevel)
    return (
        <>
        <p className="text-2xl font-medium my-5">you should take <span className="text-3xl">{(physicalInfo.gender == "male")? formula+5 : formula-161}</span> calories per day</p>
        </>
    )
}

export default ShowCalory