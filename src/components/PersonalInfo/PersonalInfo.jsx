
function PersonalInfo() {
    return (
        <>
            <h1 className="text-2xl font-medium my-5">Personal Info</h1>
            <form className="flex flex-col gap-7">
                <input type="text" placeholder="name" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input type="email" placeholder="example@email.com" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
                <input type="password" placeholder="password" className="bg-gray-50 p-3 shadow-inner rounded-xl" />
            </form>
        </>
    )
}

export default PersonalInfo;