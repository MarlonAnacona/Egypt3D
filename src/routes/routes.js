import {
   
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import { Home } from "../components/Home/Home";
  import { Login } from "../components/Login/Login";
  import { Register } from "../components/Register/Register";
  import { Modules } from "../components/Modules/Modules";
  import { ModuloHistoria } from "../components/Modules/Temas/TemaHistoria/ModuloHistoria";
  import { ModuloArquitectura } from "../components/Modules/Temas/TemaArqui/ModuloArquitectura";
  import { ModuloArte } from "../components/Modules/Temas/TemaArte/ModuloArte";
  import { ModuloMitologia } from "../components/Modules/Temas/TemaMitologia/ModuloMitologia";
  import { ModuloCostumbres } from "../components/Modules/Temas/TemaCostumbres/ModuloCostumbres";
  import { Quiz} from "../components/Quices/quiz";
  import { Quiz2 } from "../components/Quices/quiz2";
  import { Quiz3 } from "../components/Quices/quiz3";
  import { Quiz4 } from "../components/Quices/quiz4";
  import { Quiz5 } from "../components/Quices/quiz5";
  import { Profile } from "../components/Profile/Profile";
  import { LoginContext } from "../components/context/LoginContext";
  import { useContext } from "react";
  import { About } from "../components/About/About";
  import { Contact } from "../components/Contact/Contact";
  import { News } from "../components/News/News";
  import {Historia1} from "../components/Modules/Temas/TemaHistoria/Historia1";
  import {Historia2} from "../components/Modules/Temas/TemaHistoria/Historia2";
  import {Historia3} from "../components/Modules/Temas/TemaHistoria/Historia3";
  import {Historia4} from "../components/Modules/Temas/TemaHistoria/Historia4";
  // import { VideoHistoria } from "../components/Modules/Temas/TemaHistoria/VideoHistoria";
  import { Arquitectura1 } from "../components/Modules/Temas/TemaArqui/Arquitectura1";
  import { Arquitectura2 } from "../components/Modules/Temas/TemaArqui/Arquitectura2";
  import { Arquitectura3 } from "../components/Modules/Temas/TemaArqui/Arquitectura3";
  import { Arquitectura4 } from "../components/Modules/Temas/TemaArqui/Arquitectura4";
  import { Mitologia1 } from "../components/Modules/Temas/TemaMitologia/Mitologia1";
  import { Mitologia2 } from "../components/Modules/Temas/TemaMitologia/Mitologia2";
  import { Mitologia3 } from "../components/Modules/Temas/TemaMitologia/Mitologia3";
  import { Mitologia4 } from "../components/Modules/Temas/TemaMitologia/Mitologia4";
  import { Arte1 } from "../components/Modules/Temas/TemaArte/Arte1";
  import { Arte2 } from "../components/Modules/Temas/TemaArte/Arte2";
  import { Arte3 } from "../components/Modules/Temas/TemaArte/Arte3";
  import { Arte4 } from "../components/Modules/Temas/TemaArte/Arte4";
  import { Costumbres1 } from "../components/Modules/Temas/TemaCostumbres/Costumbres1";
  import { Costumbres2 } from "../components/Modules/Temas/TemaCostumbres/Costumbres2";
  import { Costumbres3 } from "../components/Modules/Temas/TemaCostumbres/Costumbres3";
  import { Costumbres4 } from "../components/Modules/Temas/TemaCostumbres/Costumbres4";

  
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
            <Route path="/quices2" element={<Quiz2 />} />
            <Route path="/quices3" element={<Quiz3 />} />
            <Route path="/quices4" element={<Quiz4 />} />
            <Route path="/quices5" element={<Quiz5 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/historia1" element={<Historia1 />} />
            <Route path="/historia2" element={<Historia2 />} />
            <Route path="/historia3" element={<Historia3 />} />
            <Route path="/historia4" element={<Historia4 />} />
            <Route path="/arquitectura1" element={<Arquitectura1 />} />
            <Route path="/arquitectura2" element={<Arquitectura2 />} />
            <Route path="/arquitectura3" element={<Arquitectura3 />} />
            <Route path="/arquitectura4" element={<Arquitectura4 />} />
            <Route path="/mitologia1" element={<Mitologia1 />} />
            <Route path="/mitologia2" element={<Mitologia2 />} />
            <Route path="/mitologia3" element={<Mitologia3 />} />
            <Route path="/mitologia4" element={<Mitologia4 />} />
            <Route path="/arte1" element={<Arte1 />} />
            <Route path="/arte2" element={<Arte2 />} />
            <Route path="/arte3" element={<Arte3 />} />
            <Route path="/arte4" element={<Arte4 />} />
            <Route path="/costumbres1" element={<Costumbres1 />} />
            <Route path="/costumbres2" element={<Costumbres2 />} />
            <Route path="/costumbres3" element={<Costumbres3 />} />
            <Route path="/costumbres4" element={<Costumbres4 />} />



          </Routes>
        ) : (
          <Routes>
  
           <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />}exact/>
            <Route path="/register" element={<Register />} exact/>
            <Route path="/about" element={<About />} exact/>
            <Route path="/contact" element={<Contact />} exact/>
            <Route path="/news" element={<News />} exact/>
          </Routes>
        )}
      </BrowserRouter>
    );
  }
