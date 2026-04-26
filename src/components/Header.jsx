import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header = ()=>{
    const {cerrarSesion} = useAuth();
    return(
        <>
         <header className="py-10 px-5 bg-indigo-500">
            <div className="container max-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-center text-indigo-200">Administrador de Pacientes {''}
                    <span className="text-white font-black">Veterinaria</span>
                </h1>
                <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-8"> 

                    <Link to={"/admin"} className="text-white text-sm  uppercase font-bold">Pacientes</Link>

                    <Link to={"/admin"} className="text-white text-sm uppercase font-bold">Perfil</Link>

                    <button  
                    type="button"
                    className="text-white text-sm uppercase font-bold"
                    onClick={cerrarSesion}
                    >cerrar sesion</button>

                </nav>

            </div>

        </header>
        </>
    )
}

export default Header;