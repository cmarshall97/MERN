const UserController = require('../controllers/user.controllers')

module.exports = (app) => {
    app.post('./api/alljokes', UserController.addUser),
    app.get('/api/allUsers',UserController.getAllUsers),
    app.get('/api/findById/:id',UserController.findById),
}