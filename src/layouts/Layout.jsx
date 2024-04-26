import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import { Toaster } from 'sonner'
import { Resumen } from "../components/Resumen"
import { Sidebar } from "../components/Sidebar"
import { useQuiosco } from "../hooks/useQuiosco"
import { ModalProducto } from "../components/ModalProducto"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//colocando el modal en el root
Modal.setAppElement('#root')

export const Layout = () => {
   const {modal} = useQuiosco()

   
  return (

    <>
       <div className="md:flex">
        
        <Sidebar />

          <main className="flex-1 h-screen overflow-scroll bg-gray-100 p-3">
            
            <Outlet />
      
          </main>
    
    
        <Resumen />
    
    
        </div>
      
          <Modal isOpen={modal} style={customStyles}>
            <ModalProducto />
          </Modal>
          <Toaster
          position="top-right" 
          richColors
           />
       

    </>
 
  )

}
