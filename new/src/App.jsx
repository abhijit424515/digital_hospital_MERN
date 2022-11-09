import Login from "./components/Login/Login"
import Home from "./components/Pages/Home"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Log_OTP from "./components/Login/Log_OTP";

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Log_OTP />} />
                <Route path="/medical" element={<Home />} />
            </Routes>
        </Router>
    );
}