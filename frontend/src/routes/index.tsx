import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import DetailsCharacter from "../pages/DetailsCharacter";
import LoginAndRegister from "../pages/LoginAndRegister";

const RouteMain = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginAndRegister />}></Route>
            <Route path="/account" element={<Dashboard />}></Route>
            <Route path="/account/character/:characterId" element={<DetailsCharacter />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    )
}

export default RouteMain