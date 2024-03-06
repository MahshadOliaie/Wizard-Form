

function GoalSelector() {
    return (
        <>
            <h1 className="text-2xl font-medium my-5">select your goal</h1>
            <form className="flex flex-col w-2/5 gap-7">
                <div className="gap-2 flex" >
                    <input type="radio" name="goal" id="gain" />
                    <label htmlFor="gain">Muscle gain</label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="goal" id="maintain" />
                    <label htmlFor="maintain">Maintain</label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="goal" id="cut" />
                    <label htmlFor="cut">Fat loss</label>
                </div>
            </form>

        </>
    )
}

export default GoalSelector