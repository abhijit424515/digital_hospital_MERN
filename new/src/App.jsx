import DisplayArea from "./components/DisplayArea"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import PatientInfo from "./components/PatientInfo/PatientInfo"
import Login from "./components/Login/Login"
import Home from "./components/Pages/Home"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/medical" element={<Home />} />
            </Routes>
        </Router>
    );
}