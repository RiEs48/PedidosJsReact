import { Link } from "react-router-dom"

export const Registro = () => {
  return (
    <>
    
    <h1 className="text text-4xl font-black">Crea Tu Cuenta</h1>
    <p>Crea tu cuenta Llenando el Formulario  </p>
    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">

            <div className="mb-4">
                <label 
                htmlFor="name"
                className="text-slate-400">
                    Nombre :

                </label>
                <input
                id="name" 
                type="text"
                className="mt-2 w-full p-3 bg-gray-50" 
                name="name"
                placeholder="Tu nombre"/>
            </div>
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
            <div className="mb-4">
                <label 
                htmlFor="password_confirmacion"
                className="text-slate-400">
                    Repite Tu Contraseña :

                </label>
                <input
                id="password_confirmacion" 
                type="password"
                className="mt-2 w-full p-3 bg-gray-50" 
                name="password_confirmacion"
                placeholder="Repite Tu Contraseña"/>
            </div>
            <input type="submit"
            className="bg-indigo-500 hover:bg-indigo-400 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            value="Crear Cuenta" />
        </form>

    </div>
    <nav className="mt-5">
      <Link to="/autentificacion/login">Ya tienes Cuenta? <span className="font-bold text-black">Inicia Sesion </span>  </Link>
    </nav>
    </>
  )
}
