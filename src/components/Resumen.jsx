
import { formatearDinero } from "../helpers";
import { useQuiosco } from "../hooks/useQuiosco"
import { ResumenProducto } from "./ResumenProducto";


export const Resumen = () => {

  const {pedido,total} = useQuiosco();

  // funcion para confirmar el pedido 
  const comprobarPedido =() => pedido.length === 0;
  


  return (
    <aside className="md:w-72" >
      <h1 className="text-black text-4xl font-bold">Mi Orden
      </h1>
      <p className="text-lg my-5">Aqui Podras ver el resumen y totales de tu pedido </p>
      <div className="py-10">

        {
          pedido.length === 0 ? (
            <p className="text-center text-2xl">
              No tienes Ordenes Registradas Aun
            </p>

          ):(
            pedido.map(producto=>(
              <ResumenProducto 
              key={producto.id}
              producto = {producto}
              />
            ))
              
            

          )}
      </div>
      <p className="text-xl mt-10">
        Total : {''}
        {formatearDinero(total)}

      </p>
      <form className="w-full">
        <div className="mt-5 p-3" > 
            <input
             type="submit" 
             name="" id=""
             value="Confirmar Pedido"
             className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-700  hover:bg-indigo-500 ' }             
               px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer p-2`}
               disabled={comprobarPedido()}
               />
            
        </div>
      </form>

    </aside>
  )
}
