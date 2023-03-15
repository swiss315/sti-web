import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from './context'


export const PrivateRoutes = () => {

    const {isAuth } = useAuthContext()


return (
    isAuth ? <Outlet/> : <Navigate to='/login'/>
  )
}