
function PersonalInfo() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-medium my-4">Personal Info</h1>
            <form className="flex flex-col w-4/5 gap-4">
                <input type="text" placeholder="name" className="bg-gray-100 p-3"/>
                <input type="email" placeholder="example@email.com" className="bg-gray-100 p-3" />
                <input type="password" placeholder="password" className="bg-gray-100 p-3" />
            </form>
        </div>
    )
}

export default PersonalInfo;