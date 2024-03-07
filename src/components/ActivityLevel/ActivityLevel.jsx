import { useContext } from "react"
import { useForm } from "react-hook-form"
import Information from "../../context/Information/Information"
import NextBtn from "../NextBtn/NextBtn"
import PreviousBtn from "../PreviousBtn/PreviousBtn"


function ActivityLevel({setStep}) {
    const { register, handleSubmit } = useForm()
    const { setActivityLevel } = useContext(Information)

    function submit(data) {
        console.log(data)
        setActivityLevel(data)
    }

    return (
        <>
            <h1 className="text-2xl font-medium my-10">select your activity level</h1>
            <form className="flex flex-col gap-7">
                <div className="gap-2 flex" >
                    <input {...register("activityLevel")} type="radio" name="rate" id="one" value={"one"} />
                    <label htmlFor="one">Sedentary <span className="text-gray-500">(Little or no Exercise/ desk job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("activityLevel")} type="radio" name="rate" id="two" value={"two"} />
                    <label htmlFor="two">Lightly active <span className="text-gray-500">(1-3 days Exercise per week)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("activityLevel")} type="radio" name="rate" id="three" value={"three"} />
                    <label htmlFor="three">Moderately active <span className="text-gray-500">(3-5 days Exercise/ desk job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("activityLevel")} type="radio" name="rate" id="four" value={"four"} />
                    <label htmlFor="four">Very active <span className="text-gray-500">(4-5 days Exercise/ Physical job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("activityLevel")} type="radio" name="rate" id="five" value={"five"} />
                    <label htmlFor="five">Extremely active <span className="text-gray-500">(7 days Exercise/ Physical job)</span></label>
                </div>
            </form>

            <div className="flex justify-between">
                <PreviousBtn step={2}  setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} step={4} />
            </div>
        </>
    )
}

export default ActivityLevel