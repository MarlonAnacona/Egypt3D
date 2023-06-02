import {
   
    Routes,
    Route,
    BrowserRouter,
    Navigate,
  } from "react-router-dom";
  import { Home } from "../components/Home/Home";
  import { Login } from "../components/Login/Login";
  import { Register } from "../components/Register/Register";
  import { Modules } from "../components/Modules/Modules";
  import { ModuloHistoria } from "../components/Modules/ModuloHistoria";
  import { ModuloArquitectura } from "../components/Modules/ModuloArquitectura";
  import { ModuloArte } from "../components/Modules/ModuloArte";
  import { ModuloMitologia } from "../components/Modules/ModuloMitologia";
  import { ModuloCostumbres } from "../components/Modules/ModuloCostumbres";
  import { Quiz } from "../components/Quices/quiz";
  import { Profile } from "../components/Profile/Profile";
  import { LoginContext } from "../components/context/LoginContext";
  import { useContext } from "react";
  
  export function MyRoutes() {
    const { isLogged } = useContext(LoginContext);
    return (
      <BrowserRouter>
        {isLogged ? (
          <Routes>
  
            <Route path="/modules" element={<Modules />} />
            <Route path="/moduloHistoria" element={<ModuloHistoria />} />
            <Route path="/moduloArquitectura" element={<ModuloArquitectura />} />
            <Route path="/moduloArte" element={<ModuloArte />} />
            <Route path="/moduloMitologia" element={<ModuloMitologia />} />
            <Route path="/moduloCostumbres" element={<ModuloCostumbres />} />
            <Route path="/quices" element={<Quiz />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        ) : (
          <Routes>
  
           <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/" replace={true} />} />

          </Routes>
        )}
      </BrowserRouter>
    );
  }
