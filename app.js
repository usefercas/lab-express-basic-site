const express = require('express');


const app = express();
app.use(express.static('public')); // todo preguntar porque no hace el import estatico


// Definir la ruta para la página de inicio
app.get('/', (req, res) => res.sendFile(__dirname + '/public/views/index.html'));

// Definir la ruta para la página Acerca de
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/views/about.html'));

// Definir la ruta para la página de Trabajos
app.get('/works', (req, res) => res.sendFile(__dirname + '/public/views/works.html'));

// Hace que el servidor escuche en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

