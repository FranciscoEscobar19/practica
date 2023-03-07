import react, { useEffect, useState } from "react";

function PokeApi(){
const [ropa, setRopa] = useState ()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(products=>{
                products.forEach(e => {
                    setRopa(ropa =>e.image)
                
                });
},[ropa])
})
return(
   <img src={ropa}/>
)
}
export default PokeApi