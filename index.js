import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from "dotenv";
import { fileURLToPath } from 'url'; 
import userRoutes from './Routes/usersRoutes.js';
import estudiosRoutes from './Routes/estudiosRoutes.js';
import updateImagesDicom from './scriptImgDicom.js';
import updateEcografoImages from './scriptEcografo.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'user_token'],
}));

app.use('/api/imgs', express.static(path.join(__dirname, 'imgs')));
app.use('/api/uploads/firmas', express.static(path.join(__dirname, 'uploads/firmas')));
const ecografoPath = process.env.ECOGRAFO_PATH;

if (ecografoPath) {
  app.use('/api/ecografo', express.static(ecografoPath));
}
app.use('/api/users', userRoutes);
app.use('/api/estudios', estudiosRoutes);

app.get("/", (req, res) => {
    res.send("Server funcionando");
});

updateImagesDicom();
updateEcografoImages();

app.listen(port, () => {
    console.log("Server en puerto", port);
});
