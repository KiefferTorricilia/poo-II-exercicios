import express, { Request, Response} from 'express';
import cors from 'cors';
import { db } from './database/knex';
import { Videos } from './models/videos';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/videos", async (req: Request, res: Response) => {
  try {

    const result = await db("videos")

    const resultPoo:Videos[] = result.map((user) => {
      return new Videos(user.id, user.titulo, user.segundos, user.upload_date)
    })

    console.log(resultPoo);
    
   

    res.status(200).send(resultPoo)
    
  } catch (error) {
    console.log(error)

    if (req.statusCode === 200) {
        res.status(500)
    }

    if (error instanceof Error) {
        res.send(error.message)
    } else {
        res.send("Erro inesperado")
    }
  }

})