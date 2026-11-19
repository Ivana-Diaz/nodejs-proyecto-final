# API REST — Gestión de productos

API REST de gestión de productos construida con **Node.js + Express 5**, con datos almacenados en **Firebase Firestore** y autenticación por **JWT**.

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start      # producción
npm run dev    # desarrollo (nodemon)
```

El servidor se levanta en `http://localhost:3000`.

## Variables de entorno

Crear un archivo `.env` en la raíz con:

```
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_APP_ID=...
JWT_SECRET_KEY=...
```

## Autenticación

Iniciar sesión para obtener un token JWT:

```http
POST /auth/login
Content-Type: application/json

{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

Respuesta:

```json
{ "token": "<jwt>" }
```

Las rutas protegidas requieren la cabecera:

```http
Authorization: Bearer <token>
```

## Endpoints

| Método | Ruta | Descripción | Auth |
|---|---|---|---|
| GET | `/api/products` | Lista todos los productos (admite `?category=`) | No |
| GET | `/api/products/:id` | Obtiene un producto por ID | No |
| POST | `/api/products/create` | Crea un producto | Sí |
| DELETE | `/api/products/:id` | Elimina un producto | Sí |

### Ejemplos

```bash
# Listar productos
curl http://localhost:3000/api/products

# Filtrar por categoría
curl http://localhost:3000/api/products?category=pulseras

# Crear producto (protegido)
curl -X POST http://localhost:3000/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"name": "Collar Lisa", "category": "collares", "price": 41650}'

# Eliminar producto (protegido)
curl -X DELETE http://localhost:3000/api/products/1 \
  -H "Authorization: Bearer <token>"
```

## Códigos de respuesta

- `200` OK · `201` Creado · `401` Token ausente / credenciales inválidas · `403` Token inválido · `404` Recurso no encontrado

## Estructura

```
index.js                        # Entrada y configuración de Express
src/
├── routes/                     # Definición de rutas (auth, products)
├── controllers/                # Manejo de request/response
├── services/                   # Lógica y acceso a Firestore
├── models/                     # Modelos de datos
├── middlewares/                # Middleware de autenticación JWT
├── utils/                      # Generación de tokens
└── data/                       # Configuración de Firebase
```
