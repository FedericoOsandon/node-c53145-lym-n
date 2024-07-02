import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
  return (
    
        products.map(product => <Item key={product.id} product={product} />)
        
    
  )
}

