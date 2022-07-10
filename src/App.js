import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./RegisterForm/Register";
import RegisterScreen from "./Screen/RegisterScreen";
import ListviewScreen from "./Screen/ListviewScreen";
import MainPage from "./pages/MainPage";
import FullCal from "./pages/FullCal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/registerScreen" element={<RegisterScreen/>}></Route>
        <Route path="/list" element={<ListviewScreen />}></Route>
        <Route path="/cal" element={<FullCal />}></Route>
        {/*    <Route path="/" element={<LoginGoogle />}></Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
