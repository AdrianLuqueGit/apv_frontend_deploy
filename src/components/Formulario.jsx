import React, {useState, useEffect} from "react";
import Alerta from "../components/Alerta";
import usePacientes from "../hooks/usePacientes";



const Formulario =() =>{

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const {guardarPaciente, paciente} = usePacientes()


    useEffect(()=>{
        if(paciente?.nombre){
            
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha).toISOString().split('T')[0])
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
        
    },  [paciente])

    

    const handleSubmit = (e)=>{
        e.preventDefault();

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setAlerta({
                msg: 'campo vacio',
                error: true
        })
        return
        }
        
        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
        setAlerta({
            msg: 'Actualizado'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')


    }

const {msg} = alerta
    return(
        <>
        <h2 className="text-center font-black text-2xl">NUEVO PACIENTE</h2>

        <p className="text-lg text-center mt-5 mb-10">Añade y Gestiona tus {""} 
            <span className="text-indigo-500 font-bold">Pacientes</span> 
        </p>
         {msg && <Alerta alerta={alerta}/>}
        <form
            className="py-10 px-5 lg:mb-0 mb-10 shadow-sm rounded-md bg-gray-50"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label
                 htmlFor="nombre"
                 className="uppercase font-bold text-gray-800"
                 >Nombre Mascota</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="nombre mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-2xl bg-white"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
             <div className="mb-5">
                <label
                 htmlFor="propietario"
                 className="uppercase font-bold text-gray-800"
                 >Nombre Propietario</label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="nombre propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-2xl bg-white"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>
             <div className="mb-5">
                <label
                 htmlFor="email"
                 className="uppercase font-bold text-gray-800"
                 >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="email propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-2xl bg-white"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
             <div className="mb-5">
                <label
                 htmlFor="fecha"
                 className="uppercase font-bold text-gray-800"
                 >Fecha Alta</label>
                <input
                    id="fecha"
                    type="Date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-2xl bg-white"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>
             <div className="mb-5">
                <label
                 htmlFor="sintomas"
                 className="uppercase font-bold text-gray-800"
                 >síntomas</label>
                <textarea
                    id="sintomas"
                    type="text"
                    placeholder="describe los síntomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-2xl bg-white"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>
            <input
               type="submit"
               className="text-white font-bold bg-indigo-600 w-full p-2 uppercase rounded-2xl 
               hover:bg-indigo-800 transition-colors"
               value={id ? 'actualizar' : 'guardar paciente'}
            />
        </form>
        </>
    )
}

export default Formulario