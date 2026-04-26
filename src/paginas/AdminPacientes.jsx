import React, {useState} from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";



const AdminPacientes = ()=> {

    const [mostrarForm, setMostrarForm] = useState(false)
    

    return(
        <>
        <div className="flex flex-col md:flex-row">
          
            <button
                type="button"
                className="bg-indigo-500 text-white uppercase font-bold p-2 mx-10 rounded-2xl mb-10 md:hidden  "
                onClick={()=> setMostrarForm(!mostrarForm)}
            >{`${!mostrarForm ? "mostrar formulario" : "ocultar formulario"}`}</button>
          
            <div className={`${mostrarForm ? 'block' : 'hidden'} md:block  md:w-1/2 lg:w-2/5`}>
               <Formulario/>
            </div>
            <div className="md:w-1/2 lg:w-3/5">
               <ListadoPacientes/>
            </div>
        </div>
        </>
    )
}

export default AdminPacientes;