const express = require('express');

const app = express();
const PORT = 8000

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(PORT, () =>{
    console.log(`Server up and running on port ${PORT}`);
})