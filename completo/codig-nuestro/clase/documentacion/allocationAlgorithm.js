function allocate(salesOrder, purchaseOrders) {
    if (!Array.isArray(salesOrder) || !Array.isArray(purchaseOrders)) throw new Error('Invalid data type. Both parameters must be strings')

    const orderedSales = salesOrder.sort((a, b) => new Date(b.created) - new Date(a.created))
    const orderedPurchases = purchaseOrders.sort((a, b) => new Date(b.reciving) - new Date(a.reciving))

    const allocatedOrders = []
    let totalQuantityInStock = 0

    while(orderedSales.length>0 && orderedPurchases>0){
        let currentPurchase = orderedPurchases.shift()
        totalQuantityInStock += currentPurchase.quantity

        while (totalQuantityInStock>=orderedSales[0].quantity) {

            const salesOrder = orderedSales.shift()
            allocatedOrders.push({
                id: salesOrder.id,
                date: currentPurchase.reciving,
            })
            totalQuantityInStock -= salesOrder.quantity
            if(orderedSales.length===0) break                 
        }
    }
    return allocatedOrders
} 



// La función allocate recibe dos parámetros: salesOrder y purchaseOrders. La función verifica si ambos parámetros son matrices (arrays) 
// usando la función Array.isArray(). Si alguno de los parámetros no es una matriz, se lanza un error con el mensaje 
// "Invalid data type. Both parameters must be strings" (Tipo de dato no válido. Ambos parámetros deben ser matrices).

// A continuación, la función realiza dos operaciones de ordenamiento en las matrices salesOrder y purchaseOrders. 
// Utiliza
//  el método sort() junto con una función de comparación para ordenar las fechas de creación de las ventas (salesOrder) y 
// las fechas de recepción de las compras (purchaseOrders). La función de comparación se define como (a, b) => new Date(b.created) - new Date(a.created) 
// para salesOrder y como (a, b) => new Date(b.reciving) - new Date(a.reciving) para purchaseOrders. 
// Esto asegura que los elementos estén ordenados de forma descendente por fecha.

// Luego, se inicializa una matriz vacía llamada allocatedOrders que se utilizará para almacenar las órdenes asignadas. 
// También se declara una variable totalQuantityInStock con un valor inicial de 0, que se utilizará para realizar un 
// seguimiento de la cantidad total en stock.

// A continuación, se ejecuta un bucle while que continuará mientras haya elementos en ambas matrices orderedSales y orderedPurchases. 
// Dentro del bucle, se extrae el primer elemento de orderedPurchases utilizando el método shift() y se almacena en la variable currentPurchase. 
// A continuación, se incrementa la variable totalQuantityInStock sumando la cantidad de la compra actual (currentPurchase.quantity).

// Después, se inicia otro bucle while que se ejecutará siempre que la cantidad total en stock (totalQuantityInStock) 
// sea mayor o igual a la cantidad de la primera venta en orderedSales. Dentro de este bucle, se extrae el primer elemento de 
// orderedSales utilizando el método shift() y se almacena en una nueva variable llamada salesOrder.

// Se crea un nuevo objeto y se añade a la matriz allocatedOrders, que contiene el ID de la venta (salesOrder.id) 
// y la fecha de recepción de la compra (currentPurchase.reciving).

// Luego, se resta la cantidad de la venta actual (salesOrder.quantity) de la cantidad total en stock (totalQuantityInStock). 
// Si la longitud de orderedSales es igual a 0, se rompe el bucle utilizando break.

// Finalmente, cuando el bucle while exterior termina, se devuelve la matriz allocatedOrders que contiene las órdenes asignadas.

// En resumen, la función allocate toma dos matrices de ventas y compras, las ordena por fecha y luego asigna las ventas a las
//  compras en función de la disponibilidad de stock. Devuelve una matriz de órdenes asignadas.