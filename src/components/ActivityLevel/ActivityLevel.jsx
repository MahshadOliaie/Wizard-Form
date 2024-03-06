

function ActivityLevel() {
    return (
        <>
            <h1 className="text-2xl font-medium my-10">select your activity level</h1>
            <form className="flex flex-col gap-7">
                <div className="gap-2 flex" >
                    <input type="radio" name="rate" id="one" />
                    <label htmlFor="one">Sedentary <span className="text-gray-500">(Little or no Exercise/ desk job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="rate" id="two" />
                    <label htmlFor="two">Lightly active <span className="text-gray-500">(1-3 days Exercise per week)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="rate" id="three" />
                    <label htmlFor="three">Moderately active <span className="text-gray-500">(3-5 days Exercise/ desk job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="rate" id="four" />
                    <label htmlFor="four">Very active <span className="text-gray-500">(4-5 days Exercise/ Physical job)</span></label>
                </div>

                <div className="gap-2 flex">
                    <input type="radio" name="rate" id="five" />
                    <label htmlFor="five">Extremely active <span className="text-gray-500">(7 days Exercise/ Physical job)</span></label>
                </div>
            </form>
        </>
    )
}

export default ActivityLevel