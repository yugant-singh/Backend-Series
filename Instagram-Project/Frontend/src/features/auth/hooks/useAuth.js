import { useContext } from "react";
import { AuthContext } from '../auth.context'
import { login, register, getMe } from '../services/auth.api'

export function useAuth() {
    const context = useContext(AuthContext)
    const {  loading, setLoading, setUser,user } = context
    const handleLogin = async (username, password) => {
        setLoading(true)
        try {
            const response = await login(username, password)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

     const handleRegister = async (username,email, password) => {
        setLoading(true)
        try {
            const response = await register(username,email, password)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }
    
      const handleGetMe = async () => {
        setLoading(true)
        try {
            const response = await getMe()
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }
    return {loading,handleRegister,handleLogin,handleGetMe,user}
}