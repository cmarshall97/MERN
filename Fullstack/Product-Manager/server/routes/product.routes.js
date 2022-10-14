const ProductController = require('../controllers/product.controller');  
module.exports = (app) => {
    //get all products
    app.get('/api/allProducts', ProductController.getAllProducts);
    //get one product
    app.get('/api/product/:id', ProductController.getOneProduct);
    //create new product
    app.post('/api/createProduct', ProductController.createProduct);
    //update product
    app.put('/api/update/:id', ProductController.updateProduct);
    //delete product
    app.delete('/api/delete/:id', ProductController.deleteProduct);

    //works from TA in testing that everything works
    // app.get("/", (req, res) => {
    //     res.status(200).json({message : "Get Routes"})
    // })

}