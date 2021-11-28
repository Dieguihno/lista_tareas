import React from "react"
import './BotonCrear.css'

function BotonCrear (props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
            className = "botonCrear"
            onClick = {()=> onClickButton (
                "clickado!"
        )}>+            
        </button>
    )
}

export {BotonCrear}