const { productService } = require("../repositories")


class ProductClass {
    
    getProdutcs = async (req, res) =>{
        const {limit, page, category, sort} = req.query

        const { docs, totalPages,hasPrevPage, hasNextPage, prevPage, nextPage } = await productService.getProducts({limit, page, category, sort})               
        
        if(!docs || docs.length === 0){
            return res.status(404).json({
                msg: 'No existen productos',
                products: false
            })
        }   
        res.status(200).json({
            status: 'success',
            payload: docs,
            totalPages,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            prevLink: prevPage ? `http://localhost:8080/api/products?page=${prevPage}` : null,
            nextLink: nextPage ? `http://localhost:8080/api/products?page=${nextPage}` : null,
            page
        })
    }

    getProdutc = async (req, res) =>{
        const {id} = req.params
        const product = await productService.getProduct(id)
        if(!product){
            return res.status(404).json({
                status: 'error',
                payload: 'No existe producto con ese id'
            })
        }   
        res.status(200).json({
            status: 'success',
            payload: product
        })
    }

    createProdutcs = async (req, res) =>{
        const newProduct = req.body
        //validar si vienene todos los campos
        
        // validar si no existe el producto
        let respuesta = await productService.createProduct(newProduct)
        // console.log(respuesta)
        
        if (!respuesta) {
            return res.status(401).json({
                status: 'error',
                payload: 'Producto ya existe en la base de datos'
            })
        }
        res.status(201).json({
            status: 'success',
            payload: respuesta
        })

    }

    updateProduct = async (req, res) =>{
        const updateProduct = req.body
        const { pid } = req.params
    
        const respuesta = await productService.updateProduct(pid, updateProduct)

        if (!respuesta) {
            return res.status(401).json({
                status: 'error',
                payload: 'Producto no existe en la base de datos'
            })
        }

        res.status(200).json({
            status: 'success',
            payload: respuesta
        })
    }

    deleteProduct = async (req, res) =>{
        const { pid } = req.params

        const respuesta = await productService.deleteProduct(pid)

        if (!respuesta) {
            return res.status(401).json({
                status: 'error',
                payload: 'Producto no existe en la base de datos'
            })
        }

        res.status(200).json({
            status: 'success',
            payload: respuesta
        })
    }
}

module.exports = new ProductClass()