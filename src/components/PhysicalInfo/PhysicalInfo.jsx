

function PhysicalInfo() {
    return (
        <>
            <h1 className="text-2xl font-medium my-5">Physical Info</h1>
            <form className="flex flex-col gap-7">
                <input type="number" placeholder="age" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input type="number" placeholder="weight" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input type="number" placeholder="height" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <div className="flex gap-10 justify-center">
                    <div className="gap-2 flex"><input type="radio" name="gender" id="male" value={"male"} />
                        <label htmlFor="male">male</label></div>
                    <div className="gap-2 flex"><input type="radio" name="gender" id="female" value={"female"} />
                        <label htmlFor="female">female</label></div>
                </div>
            </form>
        </>
    )
}

export default PhysicalInfo;