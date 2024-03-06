

function NextBtn({onClick}){
    return (
        <div className="flex w-full justify-end mt-10 mx-auto">
        <p onClick={onClick} className="px-5 py-2 w-max rounded-lg bg-blue-300 hover:bg-blue-400">Next Step</p>
        </div>
    )
}

export default NextBtn