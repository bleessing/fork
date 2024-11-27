import React from 'react';

import './App.css';


import {useRoutes} from "./routes/Routes";

import Navbar from "./components/ui/navbar/Navbar";
import Layout from "./components/layout/Layout";
import NewTask from "./components/ui/newTask/NewTask";
import {useLocation} from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";




function App() {
    const routes = useRoutes();
    const location = useLocation();

  //   проверка на страницу
    const isAuthPage = location.pathname === "/auth";
  return (

      <>

          {isAuthPage ? (
              routes
          ) : (
              <Layout>
                  {routes}
              </Layout>
          )}
      </>


  );
}

export default App;
