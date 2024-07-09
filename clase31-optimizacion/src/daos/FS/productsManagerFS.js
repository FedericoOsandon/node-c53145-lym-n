class ProductManagerFS {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }
    createProduct(){}
    updateProduct(){}
    deleteProduct(){}
}