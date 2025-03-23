import { useEffect, useState } from "react"
import StudentData from "./studentData"
import axios from "axios"

const DisplayStudents = () => {

    const [date, setData] = useState([])

    const handleGetData = () => {
        axios.get("https://school-backend-1-zds2.onrender.com/read/student").then((res) => {
            setData(res.data)
        }).catch((error) => console.log(error))
    }

    const handleRomoveData = (id) => {
        axios.delete(`https://school-backend-1-zds2.onrender.com/student/${id}`).then(() => {
            alert("success deleted")
            handleGetData()
        }).catch((error) => console.log(error))
    }

    useEffect(()=> {
        handleGetData()
    }, [])
    
    return <div>
        <table className="border-2 border-blue-400 mt-20 ml-40">
            <thead>
                <tr className="border-b-2 border-black">
                    <th className="border-l-2 border-black px-5">Name</th>
                    <th className="border-l-2 border-black px-5">Address</th>
                    <th className="border-l-2 border-black px-5">Phone</th>
                    <th className="border-l-2 border-black px-5">Age</th>
                    <th className="border-l-2 border-black px-5">Actions</th>
                </tr>
            </thead>
            {
                date.map((item) => {
                    return <StudentData delete={() => handleRomoveData(item._id)} name={item.name} address={item.address} phone={item.phone} age={item.age} />
                })
            }
        </table>
    </div>
}

export default DisplayStudents