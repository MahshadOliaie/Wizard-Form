import { useContext } from "react"
import Information from "../../context/Information/Information"


function ShowCalory() {
    const activityLevelsNumber = {
        "one": 1.2,
        "two": 1.375,
        "three": 1.55,
        "four": 1.725,
        "five": 1.9
    }

    const { physicalInfo, goal, activityLevel } = useContext(Information)
    let formula = (10 * physicalInfo.weight) + (6.25 * physicalInfo.height) - (5 * physicalInfo.age)
    let BMR = (physicalInfo.gender == "male") ? formula + 5 : formula - 161
    let maintainCalory = Math.ceil(BMR * activityLevelsNumber[activityLevel.activityLevel])


    const goals = {
        "gain": maintainCalory + (maintainCalory / 10),
        "cut": maintainCalory - (maintainCalory / 10),
        "maintain": maintainCalory
    }

    return (
        <>
            <p className="text-2xl font-medium my-5">
                you should take
                <span className="text-3xl">{Math.ceil(goals[goal.goal])}</span>
                calories per day</p>
        </>
    )
}

export default ShowCalory