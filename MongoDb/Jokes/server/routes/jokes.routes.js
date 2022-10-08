const JokeController = require('../controllers/jokes.controllers')

module.exports = (app) => {
    app.get('/api/jokes',JokeController.getAllJokes),
    app.post('./api/jokes', JokeController.addJoke),
    app.get('/api/jokes/:_id',JokeController.findById),
    app.put('/api/jokes/:_id',JokeController.updateById),
    app.delete('/api/jokes/:_id',JokeController.deleteById)
}