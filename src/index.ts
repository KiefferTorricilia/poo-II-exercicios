import express, { Request, Response} from 'express';
import cors from 'cors';
import { BaseDatabase, db } from './database/BaseDatabase';
import { Videos } from './models/videos';
import { VideoDatabase } from './database/VideoDatabase';

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

    const BaseDatabase = new VideoDatabase

    const result:any = await BaseDatabase.findVideos()

    

    const resultPoo:Videos[] = result.map((user:any) => {
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

app.post("/videos", async (req: Request, res: Response) => {
  try {

    const id: string = req.body.id;
    const titulo:string = req.body.titulo;
    const segundos:number = req.body.segundos;
    const upload_date:string = req.body.upload_date;

    // const { id, name, email, password } = req.body
    // const { id, titulo, segundos, upload_date } = req.body

    const newVideo: Videos = new Videos (
      id,
      titulo,
      segundos,
      upload_date
    )

    const BaseDatabase = new VideoDatabase

    const result = await BaseDatabase.createVideo(newVideo)

    // await db("videos").insert({
    //   id: newVideo.getId(),
    //   titulo: newVideo.getTitulo(),
    //   segundos: newVideo.getSegundos(),
    //   upload_date: newVideo.getUploadDate()
    // })

    // const [ userDB ] = await db("videos").where({id})

    // const result = new Videos(userDB.id, userDB.titulo, userDB.segundos, userDB.upload_date)

    res.status(200).send("Usuário cadastrado com sucesso")

  } catch (error) {
    console.log(error);

    if(req.statusCode === 200) {
      res.status(500);
    }

    if(error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
    
  }
})

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {

    const id:string = req.params.id;

    const { titulo, segundos, upload_date } = req.body

    

    const newVideo: Videos = new Videos (
      id,
      titulo,
      segundos,
      upload_date
    )

    const BaseDatabase = new VideoDatabase

    const result = await BaseDatabase.updateVideo(newVideo, id)

    // await db.update({
    //   titulo: newVideo.getTitulo,
    //   segundos: newVideo.getSegundos,
    //   upload_date: newVideo.getUploadDate
    // }).from("videos").where({id: id})


    res.status(200).send("Video alterado com sucesso.")
    
  } catch (error) {
    console.log(error);

    if(req.statusCode === 200) {
      res.status(500);
    }

    if(error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})

app.delete("/videos/:id", async (req:Request, res: Response) => {
  try {

    const id:string = req.params.id;

    const video = new Videos (
      id,
      "23",
      0,
      "23"
    )

    const BaseDatabase = new VideoDatabase

    const result = await BaseDatabase.deleteVideo(id)

    // await db.delete().from("videos").where({id: id})

    res.status(200).send("Video deletado.")
    
  } catch (error) {
    console.log(error);

    if(req.statusCode === 200) {
      res.status(500);
    }

    if(error instanceof Error) {
      res.send(error.message)
    } else {
      res.send("Erro inesperado")
    }
  }
})