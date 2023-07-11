import api from '../services/api';
import { createContext, useEffect, useState } from 'react'
import { setItem, getItem, clear } from '../utils/storage';

export const Authcontext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("userName") || null)
    const [token, setToken] = useState('')

    const login = async (inputs) => {

        try {
            const response = await api.post('/login', inputs)
            setItem('token', response.data.token)
            setItem('userId', response.data.user.id)
            setItem('userName', response.data.user.user_name)

            return response
        } catch (err) {
            return err
        }

    }

    const logout = () => {
        clear()
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return <Authcontext.Provider value={{ login, logout, currentUser, token }}>{children}</Authcontext.Provider>
}