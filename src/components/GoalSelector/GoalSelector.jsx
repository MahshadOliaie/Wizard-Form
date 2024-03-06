import { useForm } from "react-hook-form"
import NextBtn from "../NextBtn/NextBtn"
import { useContext } from "react"
import Information from "../../context/Information/Information"
import PreviousBtn from "../PreviousBtn/PreviousBtn"


function GoalSelector() {
    const { register, handleSubmit } = useForm()
    const { setGoal } = useContext(Information)

    function submit(data) {
        console.log(data)
        setGoal(data)
    }

    return (
        <>
            <h1 className="text-2xl font-medium my-5">select your goal</h1>
            <form className="flex flex-col w-2/5 gap-7">
                <div className="gap-2 flex" >
                    <input {...register("goal")} type="radio" name="goal" id="gain" value={"gain"} />
                    <label htmlFor="gain">Muscle gain</label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("goal")} type="radio" name="goal" id="maintain" value={"maintain"} />
                    <label htmlFor="maintain">Maintain</label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("goal")} type="radio" name="goal" id="cut" value={"cut"} />
                    <label htmlFor="cut">Fat loss</label>
                </div>
            </form>

            <div className="flex justify-between">
                <PreviousBtn step={3} />
                <NextBtn onClick={handleSubmit(submit)} state={"Done"} step={"result"}/>
            </div>


        </>
    )
}

export default GoalSelector