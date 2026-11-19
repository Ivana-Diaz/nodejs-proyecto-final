import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API REST",
    endpoints: {
      products: '/api/products',
      auth: '/auth/login'
    }
  })
})

app.use("/auth", authRouter);
app.use("/api", productsRouter);

app.use((req, res, next) => { 
  res.status(404).json({ message: "Recurso no encontrado o ruta inválida." });
})

app.listen(port, () => {
  console.log(`Servidor en: http://localhost:${port}`);
})