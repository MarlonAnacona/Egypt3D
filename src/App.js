import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { MyRoutes } from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
