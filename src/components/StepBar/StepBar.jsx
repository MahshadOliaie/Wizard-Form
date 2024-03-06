
import { useParams } from "react-router-dom"


function StepBar() {

    return (
        <div className="flex justify-between items-center gap-1 w-4/5 mx-auto my-10">
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center border-2 border-gray-500">1</div>
            <div className="flex-1 h-1 bg-gray-300"></div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ background: (location.pathname >= "/2") ? "#92c5fd" : "#dbe9fe", border: (location.pathname >= "/2") ? "2px solid #6b7280" : "2px solid #d1d5db" }}>2</div>
            <div className="flex-1 h-1 bg-gray-300"></div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ background: (location.pathname >= "/2") ? "#92c5fd" : "#dbe9fe", border: (location.pathname >= "/3") ? "2px solid #6b7280" : "2px solid #d1d5db" }}>3</div>
            <div className="flex-1 h-1 bg-gray-300"></div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ background: (location.pathname >= "/2") ? "#92c5fd" : "#dbe9fe", border: (location.pathname >= "/4") ? "2px solid #6b7280" : "2px solid #d1d5db" }}>4</div>
        </div>
    )
}

export default StepBar