import React from 'react'
import './BarraBusqueda.css'
import {AppContext} from '../context'

function BarraBusqueda (){
    const {valorBuscado, buscarTareas} = React.useContext(AppContext)
    const buscar = (event)=>{
        buscarTareas(event.target.value)
    }

    return (
        <input 
            className="BarraBusqueda"
            placeholder="Tarea a buscar"
            onChange={buscar}
            value={valorBuscado}
            />
    )
}

export {BarraBusqueda}