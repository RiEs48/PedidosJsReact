
import { Outlet } from "react-router-dom"
export const Autentificacion = () => {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
        <img src="../img/logo.svg" alt="logotipo" 
        className="max-w-xs"
        />
      <div className="p-10 w-full">
        
      <Outlet />
      </div>
    </main>
  )
}
