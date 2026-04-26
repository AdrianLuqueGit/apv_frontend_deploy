import React, { useRef } from "react";
import { useEffect, useState} from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";



const ConfirmarCuenta = () =>{
    
    const [usuarioConfirmado, setUsuarioConfirmado] = useState(false);
    const [loading, setLoading] = useState(true);
    const [alerta, setAlerta] = useState({});
    const cuentaConfirmada = useRef(false);



    const params = useParams();
    const {id} = params;

    useEffect(()=>{

        const confirmarCuenta = async () =>{
            
            if (cuentaConfirmada.current) return;
                cuentaConfirmada.current = true;


          try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`;
            const {data} = await axios(url);
            setUsuarioConfirmado(true);
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
          setLoading(false);
        }
        confirmarCuenta();
    }, []);

    return(
        <>
         <div>
         <h1 className="text-indigo-900 font-black text-6xl">
         Cuenta confirmada comienza a Gestionar tus{""} <span className="text-black">Pacientes</span>
         </h1>
       </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-2xl bg-white">
       {!loading &&  <Alerta alerta={alerta}/>}
       {usuarioConfirmado && (
        <Link 
               to="/"
               className="block text-center my-5 mx-5 text-blue-400
               hover:cursor-pointer hover:text-blue-600"
               >Iniciar sesion</Link>

       )}
         </div>
        </>
    )
};

export default ConfirmarCuenta;