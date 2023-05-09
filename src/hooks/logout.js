import { useAuthContext } from "./context"
import { Cookies } from 'react-cookie';

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const cookies = new Cookies();

    const logout = () => {
        cookies.remove('xhrToken')
        cookies.remove('user')
        cookies.remove('policy')
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}