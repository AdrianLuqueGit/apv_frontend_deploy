import { useState, useEffect, createContext } from "react";
import axios from "axios";
import usePacientes from "../hooks/usePacientes";


const  AuthContext = createContext();

const AuthProvider = ({children})=>{

    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});
    

    useEffect( ()=>{
        const authUser = async ()=>{

        const token = localStorage.getItem('token');
        
        if(!token){
            setCargando(false)
            return
        }
        
        
        const config = {
            headers: {
                "Content-Type" : "application/json",
                 Authorization : `Bearer ${token}`
            }
        }
        

        try {
            
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/perfil`;
            const {data} = await axios.get(url, config)
            
            setAuth(data)
            
        } catch (error) {
            console.log(error.response.data.msg)
            setAuth({})
        }
        setCargando(false)
        

      }
        authUser();
    }, [])

    const cerrarSesion =() =>{
        localStorage.removeItem('token');
        setAuth({})
        
    }

    return(

        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export {
    AuthContext
}

export default  AuthProvider;