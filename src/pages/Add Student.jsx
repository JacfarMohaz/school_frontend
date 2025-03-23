import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

function AddStudnet() {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("")

    const navigate = useNavigate()

    const handleSaveData = (e) => {
        e.preventDefault()
        axios.post("http://localhost:1000/create/student", {
            "name": name,
            "address": address,
            "phone": phone,
            "age": age
        }).then(() => {
            alert("data has been successfully")
            navigate("/")
        }).catch((error) => console.log(error))
    }

    return <div className="flex justify-center items-center h-screen">
        <form className="bg-blue-500 w-[600px] h-96 p-10">
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-80 h-10 text-3xl ml-20" type="text" placeholder="Enter Your Name" /> <br /> <br />
            <input value={address} onChange={(e) => setAddress(e.target.value)} className="w-80 h-10 text-3xl ml-20" type="text" placeholder="Enter Your Address" /> <br /> <br />
            <input value={phone} onChange={(event) => setPhone(event.target.value)} className="w-80 h-10 text-3xl ml-20" type="text" placeholder="Enter Your phone" /> <br /> <br />
            <input value={age} onChange={(event) => setAge(event.target.value)} className="w-80 h-10 text-3xl ml-20" type="text" placeholder="Enter Your age" /> <br /> <br />

            <button onClick={handleSaveData} className="bg-white px-20 py-2 rounded-lg ml-20">Save</button>
        </form>

    </div>
}

export default AddStudnet