import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from "react-redux";
import {RootState} from "../service/reducers/rootReducer.ts";


export const PrivateRoutes = () => {
    const AuthState = useSelector((state: RootState) => state.auth);
    const {isAuthenticated} = AuthState;

return (
    isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  )
}
