import React from "react"

function useCookies (nombreCookie, contenidoCookie){
  
    const almacenamientoLocal = localStorage.getItem (nombreCookie)
    let elementoGuardado
  
      if (!almacenamientoLocal){
        const elementoSerializado = JSON.stringify (contenidoCookie)
        localStorage.setItem (nombreCookie, elementoSerializado)
        elementoGuardado = contenidoCookie
      }
      else {
        elementoGuardado = JSON.parse(almacenamientoLocal)
      }
  
      const [elemento, setElemento] = React.useState (elementoGuardado)
      const guardar = (elementos)=> {
        if (elementos.length <= 0){
          localStorage.removeItem (nombreCookie)
        } else {
          const elementosSerializados = JSON.stringify(elementos)
          localStorage.setItem (nombreCookie, elementosSerializados)
        }
        setElemento(elementos)
      }
      return [elemento, setElemento]
  }

  export { useCookies }