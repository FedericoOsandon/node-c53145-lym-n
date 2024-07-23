import { useEffect, useState } from "react"
import { ItemList } from "../components/ItemList/ItemList"


export const ItemsListConteiner = () => {
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
        try {
            const result = await fetch('http://localhost:8080/api/products/').then(res => res.json())  
            return result.payload          
            
        } catch (error) {
            logger.info(error)
        }
    }

    useEffect(() => {
        getProducts()
        .then(res => setProducts(res))
    }, [])


    
    return (
      <div style ={{
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center'
      }} >
           <ItemList products={products} />
      </div>
    )
}
