class TicketController {
    
    ticketPost = async (req, res) => {
        const { cid } = req.params;
        const cart = await cartService.getCart(cid);
    
        if (!cart) {
        return res.status(401).json({
            status: 'error',
            message: 'Cart not found'
        });
        }
    
        // Array de IDs de productos que no se pudieron comprar
        const productsNotPurchased = [];
    
        // Comprobamos la disponibilidad de cada producto en el carrito
        for (const item of cart.products) {
        const product = item.product;
        const quantity = item.quantity;
        const stock = await productService.getProductStock(product._id);
    
        if (quantity > stock) {
            // Si no hay suficiente stock, agregamos el ID del producto a la lista de no comprados
            productsNotPurchased.push(product._id);
        } else {
            // Si hay suficiente stock, restamos la cantidad comprada del stock del producto
            await productService.updateProductStock(product._id, stock - quantity);
        }
        }
    
        // Creamos el ticket con los datos de la compra
        const ticket = await ticketService.createTicket({
        user: req.user,
        products: cart.products,
        totalPrice: cart.totalPrice
        });
    
        // Si hay productos no comprados, actualizamos el carrito para quitarlos
        if (productsNotPurchased.length > 0) {
        await cartService.updateCartProducts(cid, cart.products.filter(item => !productsNotPurchased.includes(item.product._id)));
        } else {
        // Si todos los productos se pudieron comprar, vaciamos el carrito
        await cartService.emptyCart(cid);
        }
    
        res.status(200).json({
        status: 'success',
        message: 'Purchase completed successfully',
        productsNotPurchased,
        ticket
        });
    }
}

module.exports = new TicketController()