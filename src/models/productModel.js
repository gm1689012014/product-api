// Datos en memoria (en una app real usarías una base de datos)
let products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 699.99 }
];

let lastId = 2;

// Obtener todos los productos
const getAll = () => products;

// Obtener un producto por ID
const getById = (id) => products.find(p => p.id === id);

// Agregar un nuevo producto
const add = (product) => {
  lastId++;
  const newProduct = { id: lastId, ...product };
  products.push(newProduct);
  return newProduct;
};

// Actualizar un producto
const update = (id, updatedProduct) => {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return null;
};

// Eliminar un producto
const remove = (id) => {
  products = products.filter(p => p.id !== id);
  return id;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
};