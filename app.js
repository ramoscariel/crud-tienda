const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// rutas
app.use('/', itemRoutes);

// iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto: ${PORT}`);
});