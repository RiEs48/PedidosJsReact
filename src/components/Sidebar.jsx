import { useQuiosco}  from "../hooks/useQuiosco"
import { Categoria }from "./Categoria"






export const Sidebar = () => {

  const {categorias} = useQuiosco()

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img src="img/logo.svg" alt="logotipo" 
            className="w-40"/>

        </div>
        <div className="mt-10">
            {categorias.map(categoria => (
                   <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                   />
            ))}

        </div>
        <div className="my-5 px-5">
            <button className="text-center bg-red-600 truncate font-bold text-white p-3 hover:bg-red-500 cursor-pointer">Cancelar Orden</button>
        </div>
        
    </aside>
  )
}
