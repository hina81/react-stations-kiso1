import { Routes, Route } from "react-router-dom";
import CreateThread from "../pages/CreateThread";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads/new" element={<CreateThread />} />
    </Routes>
  );
};

export default AppRoutes;
