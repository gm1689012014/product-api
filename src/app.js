const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
// Servir archivos estáticos
app.use(express.static('public'));

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productRoutes);

// Manejo de errores básico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API de productos corriendo en http://localhost:${PORT}`);
});
// Añade esto justo antes de las rutas de productos
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
const cors = require('cors');
app.use(cors());