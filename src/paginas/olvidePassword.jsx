import React, {useState} from "react";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
import axios from "axios";

const OlvidePassword = () =>{
                

    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});


    const handleSubmit = async e =>{
         e.preventDefault()

         if(email === '' || email.length < 6){
            setAlerta({
                msg: 'Email obligaorio', 
                error: true
            });
            return;
         }
 
         try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/forgot-Password`;
            const {data} = await axios.post(url, {email});

            setAlerta({
                msg: data.msg,
                error: false
            })
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
         Recuperas PassWord y Gestiona tus{""} <span className="text-black">Pacientes</span>
         </h1>
       </div>
       <div>
           <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl bg-white">
            {msg && <Alerta alerta={alerta}/>}
        <form
           onSubmit={handleSubmit}
        >
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
                   value = {email}
                   onChange={e => setEmail(e.target.value)}
               />
             </div>
             <input
                type="submit"
                value="recuperar cuenta"
                className="uppercase font-bold bg-indigo-700 
                rounded-2xl py-2 px-3 text-white w-full mt-3 hover:cursor-pointer
                hover:bg-indigo-800 md:w-auto"
            />
        </form>
        <div>
            <nav className="mt-8 lg:flex lg:justify-between">
               <Link 
               to="/registrar"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               >¿No tienes cuenta? Registrate aqui</Link>
               <Link 
               to="/"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               >¿Ya tienes cuenta? Inicia sesion</Link>

            </nav>
       </div>
           </div>

       </div>
        </>
    )
};

export default OlvidePassword;


 