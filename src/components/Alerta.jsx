import React from "react";


const Alerta = ({alerta}) =>{
    return(
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} text-center bg-linear-to-r py-2
         text-white font-bold rounded-2xl uppercase text-sm mb-8`} >
            {alerta.msg}
        </div>
    )
};


export default Alerta;