import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Write from "../pages/Write";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/write" element={<Write />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
