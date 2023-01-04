import { Route, Routes } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import SignIn from "../pages/signIn";
import Register from "../pages/register";
import Livestream from "../pages/livestream";

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/" exact element={<Livestream />} />
      <Route element={<AuthWrapper />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
export default LayoutRoute;
