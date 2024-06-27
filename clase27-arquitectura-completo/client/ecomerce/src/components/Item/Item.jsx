import { Link } from "react-router-dom"


export const Item = ({product}) => {
  return (
    <div className="card w-25">
            <img src={product.thumbnail} className="card-img-top" />
            <div className="card-body">
                <h1> {product.title}</h1>
                <p>{product.description}</p>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div className="card-footer">
                <Link 
                    to={`/detail/${product._id}`}
                    className="btn btn-outline-dark"                    
                >
                    Detalle
                </Link>
            </div>
        </div>
  )
}
