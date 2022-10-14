const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).json({message : "Get Routes"})
    })
    
    // app.get('/api', ProductController.index);
    // app.post('/api/product', ProductController.createProduct);     /* This is new */
}