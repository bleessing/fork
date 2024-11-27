import {Route, Routes} from "react-router-dom";
import Main from "../components/layout/screens/main-page/Main";
import Auth from "../components/layout/screens/auth/Auth";

import NotFound from "../components/layout/screens/not-found/NotFound";
import Dashboard from "../components/layout/screens/taskManage(dashboard/Dashboard";
import Map from "../components/layout/screens/map/Map";
import Control from "../components/layout/screens/contol/Control";
import Server from "../components/layout/screens/server/Server";
import {PrivateRoutes} from "../components/privateRoutes/PrivateRoutes";
import PrivateRoute from "./PrivateRoute";







export const useRoutes = () => {
    return (
        <Routes>
            <Route path='/auth' element={<Auth/>}/>

            <Route element={<PrivateRoute/>}>
            <Route path={'/main'} element={<Main />} />
            <Route path='/control' element={<Control/>}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/none' element={<Server/>}/>
            <Route path='/map' element={<Map/>}/>
            </Route>






            {/*<Route element={<PrivateRoute/>}>*/}
            {/*    <Route path={'/admin'} element={<Admin/>}/>*/}
            {/*    <Route path={'/logout'} element={<Logout/>}/>*/}
            {/*</Route>*/}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}