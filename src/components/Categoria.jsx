
import { useQuiosco } from "../hooks/useQuiosco"


// eslint-disable-next-line react/prop-types
export const Categoria = ({categoria}) => {

    const {handleClickCategoria,categoriaActual} = useQuiosco();


    // eslint-disable-next-line react/prop-types
    const {icono,id,nombre} = categoria


  return (
        <div className={`${categoriaActual.id === id ? 'bg-amber-400':'bg-white'} cursor-pointer flex items-center gap-4  border w-full p-3 hover:bg-amber-500` }>

            <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono"
            className="w-12" />

            <button 
            className="text-lg font-black cursor-pointer"
            type="button"
            onClick={() => handleClickCategoria(id)}
            
            >{nombre} </button>
        </div>
  )
}
