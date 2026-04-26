import React from "react";
import usePacientes from "../hooks/usePacientes";


const Paciente = ({paciente})=>{
    const {buscarPaciente, borrarPaciente} = usePacientes()
    const {nombre, propietario, email, sintomas, fecha, _id} = paciente

    const formatoFecha = (fecha) =>{
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', {dateStyle:'long'}).format(nuevaFecha)
    }


    return(
        <>
        <div className="my-5 mb-10 bg-gray-50 shadow-md px-5 py-10 rounded-2xl ml-3">
            <p className="font-bold uppercase  my-2">Nombre:{' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold uppercase my-2">Propietario:{' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
             <p className="font-bold uppercase my-2">Email:{' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
             <p className="font-bold uppercase my-2">Fecha Alta:{' '}
                <span className="font-normal normal-case">{formatoFecha(fecha)}</span>
            </p>
             <p className="font-bold uppercase my-2">Síntomas:{' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between my-5">
                <button
                   type="button"
                   className="py-2 px-10 bg-indigo-400 hover:bg-indigo-700 uppercase text-white rounded-2xl font-bold"
                   onClick={()=>buscarPaciente(_id)}
                >Editar
                </button>
                <button
                   type="button"
                   className="py-2 px-10 bg-red-400 hover:bg-red-700 uppercase text-white rounded-2xl font-bold"
                   onClick={()=>borrarPaciente(_id)}
                >Eliminar
                </button>
            </div>

        </div>
        </>
    )
}


export default Paciente;