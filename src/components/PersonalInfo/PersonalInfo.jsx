import { useContext } from "react";
import NextBtn from "../NextBtn/NextBtn";
import Information from "../../context/Information/Information";
import { useForm } from "react-hook-form";

function PersonalInfo() {
    const { setPersonalInfo } = useContext(Information)
    const { register, handleSubmit } = useForm()
 

    function submit(data) {
        setPersonalInfo(data)
    }

    return (
        <>
            <h1 className="text-2xl font-medium my-5">Personal Info</h1>
            <form className="flex flex-col gap-7">
                <input {...register("name")} type="text" placeholder="name" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input {...register("email")} type="email" placeholder="example@email.com" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input {...register("password")} type="password" placeholder="password" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
            </form>
            <NextBtn onClick={handleSubmit(submit)} step={2} />
        </>
    )
}


export default PersonalInfo;