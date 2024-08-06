function allocate(salesOrder, purchaseOrders) {
    if (!Array.isArray(salesOrder) || !Array.isArray(purchaseOrders)) throw new Error('Invalid data type. Both parameters must be strings')

    const orderedSales = salesOrder.sort((a, b) => new Date(b.created) - new Date(a.created))
    const orderedPurchases = purchaseOrders.sort((a, b) => new Date(b.reciving) - new Date(a.reciving))

    const allocatedOrders = []
    let totalQuantityInStock = 0

    while(orderedSales.length > 0 && orderedPurchases > 0){
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