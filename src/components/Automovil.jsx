const Automovil = ({automovil, addToCart})=>{
    const{name, brand, image, year, topSpeed, price}=automovil
    
    return(
    <> 
      <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">        
        <div className="col-10 row align-items-center mx-auto">
          <img className="img-fluid" src='./img/${image}.jpg' alt="imagen automóvil" />  
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>Marca: {brand}</p>
          <p>Velocidad: {topSpeed}</p>
          <p>Año: {year}</p>
          <p className="fw-black text-primary fs-3">U$S - {price.toLocaleString()}</p> 
          <button
          onClick={()=> addToCart(automovil)}
            type="button"
            className="btn btn-dark w-100"
            >Agregar al Carrito</button>
        </div>
      </div>
    </>
    )
}
export {Automovil}