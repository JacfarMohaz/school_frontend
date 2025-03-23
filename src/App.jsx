import { Routes, Route} from  "react-router-dom"
import Home from "./pages/Home"
import AddStudnet from "./pages/Add Student"

function App(){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/addStudent" element={<AddStudnet />} />
  </Routes>
}

export default App