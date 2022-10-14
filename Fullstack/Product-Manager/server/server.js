const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
//mongoose needs to be before the routes for database to connect

require('./config/mongoose.config'); 

app.use(express.json());                           /* allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* allows JSON Objects with strings and arrays*/

app.use(
    cors({ //allows different parts to send requests to our API
        origin: 'http://localhost:3000',
}),
)


/* This is a short-hand notation we use: */
require('./routes/product.routes')(app);
/* These two lines are the long-hand notation of the above code, to better illustrate what's going on: */
/* const personRoutes = require("./routes/person.routes"); */
// personRoutes(app); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
