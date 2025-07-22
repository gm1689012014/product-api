const productModel = require('../models/productModel');

// Obtener todos los productos
exports.getAllProducts = (req, res) => {
  try {
    const products = productModel.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
exports.getProductById = (req, res) => {
  try {
    const product = productModel.getById(Number(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo producto
exports.createProduct = (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Nombre y precio son requeridos' });
    }
    const newProduct = productModel.add({ name, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto
exports.updateProduct = (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, price } = req.body;
    
    if (!name && !price) {
      return res.status(400).json({ error: 'Debe proporcionar al menos un campo para actualizar' });
    }
    
    const updatedProduct = productModel.update(id, { name, price });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto
exports.deleteProduct = (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedId = productModel.remove(id);
    if (deletedId) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};