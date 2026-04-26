import React from "react";
import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () =>{
    const {pacientes} = usePacientes()
    
    return(
        <>
         {pacientes.length ? (<>
             <h2 className="text-center font-black text-2xl">TUS PACIENTES</h2>

             <p className="text-xl mt-5 mb-10 text-center">
                Gestiona citas y tus {''}
                <span className="text-indigo-600 font-bold">Pacientes</span>
             </p>

             {pacientes.map( paciente => (
                  <Paciente
                      key={paciente._id}
                      paciente={paciente}
                  />
                
             ))}
         
         </>) : 
        ( <>
             <h2 className="text-center font-black text-2xl">NO HAY PACIENTES</h2>

             <p className="text-xl mt-5 mb-10 text-center">
                Agrega tus nuevos {''}
                <span className="text-indigo-600 font-bold">Pacientes</span>
             </p>

         </>)}
        </>
    )
}

export default ListadoPacientes