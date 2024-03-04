

function PhysicalInfo(){
    return(
        <>
        <form>
            <input type="number" placeholder="age" />
            <input type="number" placeholder="weight" />
            <input type="number" placeholder="height" />
            <input type="radio" id="male" value={"male"}/>
            <label htmlFor="male">male</label>
            <input type="radio" id="female" value={"female"}/>
            <label htmlFor="female">female</label>
        </form>
        </>
    )
}

export default PhysicalInfo;