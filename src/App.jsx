
import { Automovil } from "./components/Automovil"
import { Header } from "./components/Header"
import { useCart } from "./hooks/useCart"


function App() {
 const {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        carTotal
    } = useCart()
  
  return (
    <>
     <Header
      cart={cart}
      removeFromCart={removeFromCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      clearCart={clearCart}
      carTotal={carTotal}
     />

    <main className="container-xl mt-5">
      <h2 className="text-center">Automóviles disponibles</h2>
      
      <div className="row mt-5">
        {/*Función que mapea la informacion con el id,la variable automovil, se exporta a Automovil.jsx*/}
        {data.map((automovil)=>( 
          <Automovil
          key={automovil.id}
          automovil={automovil} 
          addToCart= {addToCart}
          />

        ))}
        
      </div>
      
      
    </main>

    <footer className="mt-5 py-5">
      <div className="container-xl">
        <p className="text-center fs-6 mt-4 m-md-0 text-muted">© 2024 Super Carros, Inc</p>
      </div>
    </footer>
    </>
  )
}

export default App
