import { formatearDinero } from "../helpers"
import { useQuiosco } from "../hooks/useQuiosco"


// eslint-disable-next-line react/prop-types
export const Producto = ({ producto}) => {

      const {handleClickModal,handleSetProducto} = useQuiosco()

    // eslint-disable-next-line react/prop-types
    const {nombre,imagen,precio} = producto

  

    

  return (
    <div className="border p-3 shadow bg-white">

      <img src={`/img/${imagen}.jpg`} alt={`imagen${nombre}`} 
      className="w-full"

      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}
        </h3>
          <p 
          className="mt-5 font-black text-4xl text-amber-600"
          >{ formatearDinero(precio)} 
          </p>
           <button type="button" className="bg-indigo-700 p-3 hover:bg-indigo-500 text-white w-full mt-5 uppercase font-bold
           "
           onClick={() =>{
            handleClickModal()
            handleSetProducto(producto)
           } }
           
           >
            Agregar

           </button>

      </div>

    </div>
  )
}
