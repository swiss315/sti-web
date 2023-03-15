import { createContext, useEffect, useReducer } from "react"
import { Cookies } from 'react-cookie';


const cookies = new Cookies();

export const AuthContext = createContext("");

export const initialState = {
    isAuth: cookies.get('xhrTOKEN') ? true : false,
    token: "",
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuth: true,
                token: action.token,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false,
                token: "",
            };
        default:
            return state;
    }
};


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const token = cookies.get('xhrTOKEN')

        if (token) {
            dispatch({ type: 'LOGIN', token: token })
        }

    }, [])

    // console.log("AuthContext state:", state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

