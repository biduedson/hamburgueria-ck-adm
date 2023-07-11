
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./protectedRoutes";
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<ProtectedRoute redirectTo='/' />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes