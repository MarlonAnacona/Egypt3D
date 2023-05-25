import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { Modules } from "../components/Modules/Modules";
import { ModuloHistoria } from "../components/Modules/ModuloHistoria";
import { ModuloArquitectura } from "../components/Modules/ModuloArquitectura";
import { ModuloArte } from "../components/Modules/ModuloArte";
import { ModuloMitologia } from "../components/Modules/ModuloMitologia";
import { ModuloCostumbres } from "../components/Modules/ModuloCostumbres";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/modules" element={<Modules/>}/>
                <Route path="/moduloHistoria" element={<ModuloHistoria/>}/>
                <Route path="/moduloArquitectura" element={<ModuloArquitectura/>}/>
                <Route path="/moduloArte" element={<ModuloArte/>}/>
                <Route path="/moduloMitologia" element={<ModuloMitologia/>}/>
                <Route path="/moduloCostumbres" element={<ModuloCostumbres/>}/>
            </Routes>
        </Router>
    )
}