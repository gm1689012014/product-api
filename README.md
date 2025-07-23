# product-api
API RESTful básica para gestión de productos
# API de Productos

API RESTful básica para gestión de productos

## Endpoints

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener un producto específico
- `POST /api/products` - Crear un nuevo producto
- `PUT /api/products/:id` - Actualizar un producto
- `DELETE /api/products/:id` - Eliminar un producto

```mermaid
flowchart TD
    Cliente -->|GET /items| Obtener_todos_los_productos
    Cliente -->|GET /items/:id| Obtener_item_por_ID
    Cliente -->|POST /items| Crear_nuevo_item
    Cliente -->|PUT /items/:id| Actualizar_item
    Cliente -->|DELETE /items/:id| Eliminar_item

    Obtener_todos_los_items --> Base_de_datos
    Obtener_item_por_ID --> Base_de_datos
    Crear_nuevo_item --> Base_de_datos
    Actualizar_item --> Base_de_datos
    Eliminar_item --> Base_de_datos
```
## Ejemplo de Uso

Crear un producto:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Nuevo Producto","price":99.99}' \
  https://expert-guide-x5466xv6gg9gf6v6g-3000.app.github.dev//api/products
```
