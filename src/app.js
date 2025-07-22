const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Asegúrate de tener esto instalado
const productRoutes = require('./routes/products');

// 1. Primero crea la instancia de Express
const app = express();

// 2. Luego configura los middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos estáticos

// 3. Configura las rutas
app.use('/api/products', productRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de Productos',
    endpoints: {
      getAllProducts: 'GET /api/products',
      getProduct: 'GET /api/products/:id',
      createProduct: 'POST /api/products',
      updateProduct: 'PUT /api/products/:id',
      deleteProduct: 'DELETE /api/products/:id'
    }
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;