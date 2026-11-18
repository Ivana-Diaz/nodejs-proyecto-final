import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => { 
  res.status(404).send("Recurso no encontrado o ruta inválida");
})

app.listen(port, () => {
  console.log(`Servidor en: http://localhost:${port}`);
})