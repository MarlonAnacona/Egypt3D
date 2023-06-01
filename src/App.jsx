import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { LoginWrapper } from "./components/context/LoginContext";
import { MyRoutes } from "./routes/routes";
function App() {
  return (
    <div className="App">
      <LoginWrapper>
              <Navbar />
  <MyRoutes /> 
</LoginWrapper>    </div>
  );
}

export default App;
