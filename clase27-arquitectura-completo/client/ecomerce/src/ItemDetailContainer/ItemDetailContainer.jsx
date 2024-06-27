import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()

    const getProduct = async () => {
        return await fetch(`http://localhost:8080/api/products/${pid}`).then(res => res.json())
    }

    useEffect(()=>{
        getProduct()
        .then(res  =>setProduct(res.payload))
    }, [])
    console.log(product)
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    )
}
