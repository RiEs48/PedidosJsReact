
import { createContext,useEffect,useState } from "react"
import { toast } from "sonner";
import {categorias as categoriasDB} from "../data/categorias"




export const QuioscoContext= createContext();


// eslint-disable-next-line react/prop-types
export const QuioscoProvider = ({ children }) => {

    const [categorias] = useState(categoriasDB);

    const [categoriaActual,setCategoriaActual] = useState(categorias[0])

    const [modal,setModal] = useState(false)

    //state para los productos
    const [producto,setProducto] = useState({})

    //state para el pedido
    const [pedido,setPedido]= useState([])
    //state para el total de todos los productos
    const [total,setTotal] = useState(0)
    //usamos un suse efect cada que pedido cambie le enviemos un total
   useEffect(()=>{
    const nuevoTotal = pedido.reduce((total,producto)=>(producto.precio * producto.cantidad) + total, 0)

    setTotal(nuevoTotal)
   },[pedido])


    // funcion para filtrar
    const handleClickCategoria = (id) =>{

      const categoria = categorias.filter(cat=> cat.id === id)[0]
      setCategoriaActual(categoria)
    }

    //funcion del boton modal 
    const handleClickModal =() =>{
      setModal(!modal)

    }

    // funcion para los productos
    const handleSetProducto =(producto) =>{
      setProducto(producto)

    }
    //funcion para agregar Pedidos 

    const handleAgregarPedido =({categoria_id, ...producto}) =>{
      
      if (pedido.some(pedidosState=> pedidosState.id === producto.id)) 
        {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto :pedidoState)

            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
          
      }else{
          setPedido([...pedido,producto])
          toast.success('Agregado al Pedido')
      }
    }

    // funcion para actualizar o editar
    const handleEditarCantidad=(id) =>{
     const productoACTUALIZAR = pedido.filter(producto => producto.id ===id)[0]
     setProducto(productoACTUALIZAR)
     setModal(!modal)

    }

    const handleEliminarPedido =(id)=>{
      
      const eliminado = pedido.filter(producto=> producto.id !== id)
      setPedido(eliminado)
      toast.warning('Eliminado Del Pedido')

    }

  
  return (

    <QuioscoContext.Provider
    value={{
        categorias,
        categoriaActual,
        handleClickCategoria ,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarPedido,
        total
    }}
    
    >{children}</QuioscoContext.Provider>
  )
}


