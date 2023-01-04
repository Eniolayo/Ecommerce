import { Route, Routes } from "react-router-dom";
import Name from "../components/Name";
import Dashboard from "../pages/dashboard";
import Livestream from "../pages/livestream";

function LayoutRoute() {
  return (
    <Routes>
      <Route path="/" exact element={<Livestream />} />
      {/* <Route exact element={<Name />}>
      </Route> */}
    </Routes>
  );
}
export default LayoutRoute;
