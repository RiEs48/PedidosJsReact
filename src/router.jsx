import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Autentificacion } from './layouts/Autentificacion'
import { Inicio } from './views/Inicio'
import { Login } from './views/Login'
import { Registro } from './views/Registro'

 const router = createBrowserRouter([
    {
        path :'/',
        element:<Layout />,
        children:[
            {
                index:true,
                element : <Inicio />
            }
        ]
    },
    {
        path:'/autentificacion',
        element:<Autentificacion />,
        children:[
            {
                path: '/autentificacion/login',
                element: <Login />
            },
            {
                path: '/autentificacion/registro',
                element: <Registro />
            }
        ]
    }

])
export default router