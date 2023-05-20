import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { Modules } from "../components/Modules/Modules";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/modules" element={<Modules/>}/>
            </Routes>
        </Router>
    )
}