import { useState, useEffect, createContext } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth"; //

const PacientesContext = createContext();



const PacientesProvider= ({children})=>{

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})
    const {auth} = useAuth()


    useEffect(() =>{

    const obtenerPacientes = async ()=>{
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/pacientes`
            const token = localStorage.getItem('token')

            if(!token) return

            const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization : `Bearer ${token}`
                }
            }

            const {data} = await axios.get(url, config)
            setPacientes(data)
            
        } catch (error) {
            console.log(error)
        }  
    }
     //comprobar si tiene pacientes si no borrar elstate
        if(auth?._id){
            obtenerPacientes()
        }else{
            setPacientes([])
        }
        
   
}, [auth])

    

    const guardarPaciente = async (paciente)=>{

        const url = `${import.meta.env.VITE_BACKEND_URL}/api/pacientes`
        const token = localStorage.getItem('token')
        const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization : `Bearer ${token}`
                }
            }

        if(paciente.id){
            try {

            const {data} = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/pacientes/${paciente.id}`, paciente, config)
            
            const pacienteActualizados = pacientes.map( pacienteState => 
                                         pacienteState._id === data._id ? data : pacienteState)
            setPacientes(pacienteActualizados)
                
            } catch (error) {
                console.log(error.response.data.msg)
            }
            
        }else{
            try {
            
            const {data} = await axios.post(url, paciente, config)
            const {__v, ...pacienteGuardado} = data
            setPacientes([pacienteGuardado, ...pacientes])
        
        } catch (error) {
            console.log(error.response.data.msg)
        }

        }

       
    }
    // buscar paciente para editarlo
    const buscarPaciente = async (id)=>{
        
        try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/pacientes/${id}`
        const token = localStorage.getItem('token')
        const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization : `Bearer ${token}`
                }
            }
        if(!id) return


        const {data} = await axios.get(url, config)
        setPaciente(data)
        
            
        } catch (error) {
            console.log(error)
        }
    }

    const borrarPaciente = async (id) =>{

       const confirmar = confirm('cuidado vas a borrar permanentemente datos')

          if(confirmar){
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/pacientes/${id}`
                const token = localStorage.getItem('token')
                const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization : `Bearer ${token}`
                }
            }
            const {data} = await axios.delete(url, config)
            const pacientesActualizados = pacientes.filter(pacienteState => pacienteState._id !== id)
            setPacientes(pacientesActualizados)
            
                
            } catch (error) {
                console.log(error)
            }
          }

    }

    return(
        <PacientesContext.Provider
            value={{
                pacientes,
                paciente,
                guardarPaciente,
                buscarPaciente, 
                borrarPaciente
            }}
        >

           {children}
        </PacientesContext.Provider>
    )

}


export {PacientesProvider}

export default PacientesContext