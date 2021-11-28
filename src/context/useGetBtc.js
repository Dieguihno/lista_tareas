import React from "react";

function useGetBtc (){
    const [btc, setBtc] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [data, obtenerData] = React.useState(null)
  
    const consultar = async () => {
      const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
      const peticion = await fetch(url)
      const respuesta = await peticion.json()
      obtenerData(respuesta)
    }
  
    React.useEffect(() => {
      try{
        consultar()
        setBtc (data.bpi.USD.rate)
        setError (null)
      } catch (error) {
        setError ("porfavor recargue la pagina")
      }    
    })
    /* return data.bpi.USD.rate */
    return {btc, error}
  }

  export { useGetBtc }