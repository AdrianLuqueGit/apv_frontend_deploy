import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";

const NuevoPassword = () =>{

    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const [passwordValidado, setPasswordValidado] = useState(false);

    const params = useParams();
    const { token } = params;

    

    useEffect( () =>{
        const comprobarToken = async () =>{
            try {
                await axios(`${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/forgot-Password/${token}`)
                setAlerta({
                    msg: 'Puedes crear tu nuevo password',
                    error: false
                })
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: 'algo fallo',
                    error: true
                })
            }

        }
        comprobarToken();
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setAlerta({
                msg: 'Minimo 6 caracteres',
                error: true
            })
            return
        }

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/forgot-Password/${token}`;
            const {data} = await axios.post(url, {password});
            console.log(data)
            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordValidado(true);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    const {msg} = alerta;
    return(
     <>
    <div>
        <h1 className="text-indigo-900 font-black text-6xl">
            Recupera tu PassWord y Gestiona tus{""} <span className="text-black">Pacientes</span>
        </h1>
    </div>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl bg-white">
        {msg && <Alerta alerta={alerta}/>}

        {tokenValido && (
        <form onSubmit={handleSubmit}>
            <div className="my-8">
                <label
                   className="uppercase block text-gray-500 font-bold text-xl"
                >
                 Nuevo Password
                </label>
                <input 
                   type="password"
                   placeholder="escribe tu nuevo password"
                   className="border border-gray-400 w-full p-3 mt-3 bg-gray-200 rounded-2xl"
                   value = {password}
                   onChange = { e => setPassword(e.target.value)}
                />
            </div>
                <input
                type="submit"
                value="Nuevo Password"
                className="uppercase font-bold bg-indigo-700 
                rounded-2xl py-2 px-3 text-white w-full mt-3 hover:cursor-pointer
                hover:bg-indigo-800 md:w-auto"
                />
        </form>
   
        )}
         {passwordValidado && 
               <Link 
               to="/"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               > INICIA SESION</Link> }
        </div> 
     </>
    )
};

export default NuevoPassword;