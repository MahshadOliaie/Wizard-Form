import { useContext } from "react";
import { useForm } from "react-hook-form";
import Information from "../../context/Information/Information";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";


function PhysicalInfo({setStep}) {
    const { register, handleSubmit } = useForm()
    const { setPhysicalInfo } = useContext(Information)

    function submit(data) {
        setPhysicalInfo(data)
    }

    return (
        <>
            <h1 className="text-2xl font-medium my-5">Physical Info</h1>
            <form className="flex flex-col gap-7">
                <input {...register("age")} type="number" placeholder="age" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input {...register("weight")} type="number" placeholder="weight (kg)" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input {...register("height")} type="number" placeholder="height (cm)" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <div className="flex gap-10 justify-center">
                    <div className="gap-2 flex"><input {...register("gender")} type="radio" name="gender" id="male" value={"male"} />
                        <label htmlFor="male">male</label></div>
                    <div className="gap-2 flex"><input {...register("gender")} type="radio" name="gender" id="female" value={"female"} />
                        <label htmlFor="female">female</label></div>
                </div>
            </form>
            <div className="flex w-full justify-between">
                <PreviousBtn step={" "} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} step={3} />
            </div>
        </>
    )
}

export default PhysicalInfo;