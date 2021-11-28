import React from "react";

import { useCookies } from "./useCookies";
import { useSearch } from "./useSearch";
import { useGetBtc } from "./useGetBtc";

const AppContext = React.createContext();

const contenidoLista = [
    {texto: "Tarea 1 XX", completada: false}, 
    {texto: "Tarea 2 XX", completada: false},    
    {texto: "Tarea 3", completada: true}    
    ]  
    
const nombreLista = 'MI_LISTA_TAREAS'

function AppProvider(props) {

    const [tareas, guardar] = useCookies (nombreLista, contenidoLista) //quien es nombreLista?
    const [tareasBuscadas, valorBuscado, buscarTarea] = useSearch (tareas)
      
    const {btc, error} = useGetBtc()
      
      
    //hooks para interactuar con el DOM
        
    const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
    const totalTareas = tareas.length
        
            
      
    //completar
    const completar = (texto) => {
         const indice = tareas.findIndex(tarea => tarea.texto == texto)
         const nuevaLista = [...tareas]
         nuevaLista[indice].completada = !nuevaLista[indice].completada
         guardar(nuevaLista)  
    }
      
    //borrar
    const borrar = (texto)=>{
         const indice = tareas.findIndex(tarea => tarea.texto == texto)
         const nuevaLista = [...tareas]
         nuevaLista.splice(indice, 1)
         guardar(nuevaLista)
    }

    const [openModal, setOpenModal] = React.useState(false);

    const agregarNueva = (text) => {
        const nuevaLista = [...tareas]
        nuevaLista.push({
            texto: text,
             completada: false
        })
        guardar(nuevaLista)
    }

    const nombreAutorCookie = 'NOMBRE_AUTOR'
    const nombreAutorValor = 'DIEGO'
    const [nombreDelAutor] = useCookies(nombreAutorCookie, nombreAutorValor)
    

    return (
        <AppContext.Provider value={{
            btc,
            error,
            tareasCompletadas,
            totalTareas,
            valorBuscado,
            buscarTarea,
            tareasBuscadas,
            completar,
            borrar,
            nombreDelAutor,
            openModal,
            setOpenModal,
            agregarNueva,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };




   
   
    
    