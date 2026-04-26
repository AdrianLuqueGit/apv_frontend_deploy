import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import RutaProtegida from './Layout/RutaProtegida'
import Login from './paginas/Login'
import RegistrarCuenta from './paginas/registrarCuenta'
import ConfirmarCuenta from './paginas/confirmarCuenta'
import OlvidePassword from './paginas/olvidePassword'
import NuevoPassword from './paginas/nuevoPassword'
import AdminPacientes from './paginas/AdminPacientes'

import  AuthProvider  from './context/AuthProvider'
import {PacientesProvider} from './context/PacientesProvider'


function App() {
  

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>} />
              <Route path="registrar" element={<RegistrarCuenta/>} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>} />
              <Route path='olvide-password' element={<OlvidePassword/>} />
              <Route path='olvide-password/:token' element={<NuevoPassword/>} />
            </Route>
            <Route path='/admin' element={<RutaProtegida/>}>
               <Route index element={<AdminPacientes/>}/>

            </Route>
        </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )

}

export default App
