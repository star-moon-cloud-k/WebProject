import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import UsersPage from './page/UsersPage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersPage/>} />
      </Routes>
    </div>
  );
};

export default App;
