import { React, useEffect, useState } from "react";
const apiFetch = "https://dog.ceo/api/breed/dachshund/images/random";

function Boton(){
    const [perros,setPerros] = useState(true)
    const [imagenUrl, setImagenUrl]= useState(null)
    


    useEffect(()=>{
        if (perros) {
        fetch(apiFetch)
        .then((response) => response.json())
        .then ((dog)=>{
            setImagenUrl(dog.message)
            setPerros(false)
        })
    }
    },[perros])

    const randomDog= () => {
        setPerros(true);
      };

    if(perros){
    return(
        <div className="App1">
            <h1>Cargando...</h1>
        </div>
    )
    }else{    
        return(
            <div  className="App1">
      <img className="imagen" src={imagenUrl} alt="Imagen de perrito aleatoria" />
      <button className="boton" onClick={randomDog}>
        Cambiar
      </button>
    </div>
        )
    }
}
export default Boton
