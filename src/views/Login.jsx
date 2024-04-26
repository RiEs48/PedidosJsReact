import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>
    
    <h1 className="text text-4xl font-black">Iniciar Sesion</h1>
    <p>Para Crear Un pedido Debes Iniciar Sesion </p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">

        
            <div className="mb-4">
                <label 
                htmlFor="email"
                className="text-slate-400">
                    Email :

                </label>
                <input
                id="email" 
                type="email"
                className="mt-2 w-full p-3 bg-gray-50" 
                name="email"
                placeholder="Tu Correo aqui"/>
            </div>
            <div className="mb-4">
                <label 
                htmlFor="password"
                className="text-slate-400">
                    Contraseña :

                </label>
                <input
                id="password" 
                type="password"
                className="mt-2 w-full p-3 bg-gray-50" 
                name="password"
                placeholder="Tu Contraseña"/>
            </div>
         
            <input type="submit"
            className="bg-indigo-500 hover:bg-indigo-400 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            value="Iniciar Sesion" />
        </form>

    </div>
    <nav className="mt-5">
     <Link to="/autentificacion/registro">No tienes Cuenta? <span className="font-bold text-amber-600">Crea Una Aqui  </span> </Link>
    </nav>
    </>
  )
}
