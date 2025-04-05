import { Routes, Route } from "react-router-dom";
import CreateThread from "../pages/CreateThread";
import Home from "../pages/Home";
import Thread from "../pages/Thread";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads/new" element={<CreateThread />} />
      <Route path="/threads/:threads_id" element={<Thread />} />
    </Routes>
  );
};

export default AppRoutes;
