import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { LoginWrapper } from "./components/context/LoginContext";
import { MyRoutes } from "./routes/routes";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <LoginWrapper>
              <Navbar />
  <MyRoutes /> 
  <Footer/>
</LoginWrapper>    </div>
  );
}

export default App;
