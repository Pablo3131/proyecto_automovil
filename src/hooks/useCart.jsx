import { useEffect, useState } from "react"
import {db} from "../data/db"


const useCart = ()=>{
    //Creamos una constante para verificar si hay datos en el local storage, si hay, lo devuelve asi como está, sino pone el array vacío
const initialCart= ()=>{
  const localStorageCart = localStorage.getItem('cart')
  return localStorageCart ? JSON.parse(localStorageCart) : []
}
  
//Hacemos la conexion a la bd simulada
  const data = db
//Creamos un UseState para modificar el estado de la cesta
const[cart, setCart]= useState(initialCart)

//creamos un useEffect para ejecutar código cuando el componente cambia o se renderiza
useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart)) //-> convertimos cart en un JSON
},[cart]) //-> Solo se lo aplicamos a cart
//Función que agrega el carrito a la cesta
  function addToCart(item){
    const itemExist=cart.findIndex(automovil=>automovil.id ===item.id)
    if (itemExist >= 0) {
      const upDateCart=[...cart]
      upDateCart[itemExist].quantity++
      setCart(upDateCart)

    } else {
      item.quantity=1
      setCart([...cart, item])
    }
  }
  function removeFromCart(idEliminar){
        setCart(preCart=>preCart.filter(automovil=>automovil.id !==idEliminar))//Funcion para eliminar automoviles de la cesta clickeando "x"
  }
  function decreaseQuantity(id){
    const updateCart = cart.map( item => //Funcion para eliminar la cantidad automoviles con las misma caracteristicas clickeando "-" 
    {
      if(item.id === id && item.quantity > 1)
      {
        return{
          ...item, /*copia todo el objeto*/
          quantity: item.quantity -1
        }
      }
      return item
    }
    )
    setCart(updateCart)
  }

  function increaseQuantity(id){
    const incUpdateCart= cart.map(item =>{       //Funcion para sumar la cantidad automoviles con las misma caracteristicas clickeando "+" 
      if (item.id === id && item.quantity < 10){
        return{
          ...item,
          quantity: item.quantity +1
        }
      }
      return item
    })
    setCart(incUpdateCart)
  }
  function clearCart (){
    setCart([])
  }
   const carTotal= cart.reduce((total,{price,quantity})=> { return total + (price * quantity)},0)
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        carTotal
    }
}
export{useCart}