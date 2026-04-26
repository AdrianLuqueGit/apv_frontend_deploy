import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";


const RegistrarCuenta =  () =>{
    const [ nombre, setNombre] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ repetirPassword, setRepetirPassword] = useState('');

    const [ alerta, setAlerta] = useState({});

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({msg:'campos vacios', error: true});
            console.log('campos vacios')
            return;
        }
        if(password !== repetirPassword){
            setAlerta({msg:'password no coincide', error: true});
            return;
        }
        if(password.length < 6){
            setAlerta({msg:'minimo 6 caracteres', error: true});
            return;
        }

        setAlerta({});
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios`;
            
            const respuesta = await axios.post(url, {nombre, email, password})
            setAlerta({
                msg:'registrado correctamente revisa tu correo', 
                error: false
            });
            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')

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
        Registrate una cuenta y Gestiona <span className="text-black">Pacientes</span>
        </h1>
       </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl bg-white">
       {msg &&  <Alerta alerta ={alerta} />}
        <form onSubmit={handleSubmit}>
            <div className="my-8">
               <label
                   className="uppercase block text-gray-500 font-bold text-xl"
               >
                 Nombre
               </label>
               <input 
                   type="text"
                   placeholder="escribe tu nombre"
                   className="border border-gray-400 w-full p-3 mt-3 bg-gray-200 rounded-2xl"
                   value={nombre}
                   onChange={e => setNombre(e.target.value)}

               />
            </div>
            <div className="my-8">
               <label
                   className="uppercase block text-gray-500 font-bold text-xl"
               >
                 Email
               </label>
               <input 
                   type="email"
                   placeholder="escribe tu email"
                   className="border border-gray-400 w-full p-3 mt-3 bg-gray-200 rounded-2xl"
                   value={email}
                   onChange={e => setEmail(e.target.value)}

               />
            </div>
            <div className="my-8">
                <label
                   className="uppercase block text-gray-500 font-bold text-xl"
               >
                 Password
               </label>
               <input 
                   type="password"
                   placeholder="escribe tu password"
                   className="border border-gray-400 w-full p-3 mt-3 bg-gray-200 rounded-2xl"
                   value={password}
                   onChange={e => setPassword(e.target.value)}

               />
            </div>
             <div className="my-8">
                <label
                   className="uppercase block text-gray-500 font-bold text-xl"
               >
                 Repite Password
               </label>
               <input 
                   type="password"
                   placeholder="repite tu password"
                   className="border border-gray-400 w-full p-3 mt-3 bg-gray-200 rounded-2xl"
                   value={repetirPassword}
                   onChange={e => setRepetirPassword(e.target.value)}

               />
            </div>
            <input
                type="submit"
                value="crear cuenta"
                className="uppercase font-bold bg-indigo-700 
                rounded-2xl py-2 px-3 text-white w-full mt-3 hover:cursor-pointer
                hover:bg-indigo-800 md:w-auto"
            />
        </form>
        <div>
            <nav className="mt-8 lg:flex lg:justify-between">
               <Link 
               to="/"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               >¿Ya tienes cuenta? Inicia sesion</Link>
               <Link 
               to="/olvide-password"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               >¿Olvidaste tu contraseña? Recuperala aqui</Link>

            </nav>
       </div>
     </div>
        </>
    )
};

export default RegistrarCuenta;