import { Link } from "react-router";
import DisplayStudents from "../components/displayStudent";

function Home(){
    return <div>
        <Link to="/addStudent"><button className="bg-blue-600 px-12 py-3 rounded-lg text-white mt-10 ml-40">Add Student</button></Link>
        <DisplayStudents />
    </div>
}

export default Home