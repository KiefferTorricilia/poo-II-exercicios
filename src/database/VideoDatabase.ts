import { Videos } from "../models/videos";
import { BaseDatabase } from "./BaseDatabase";


export class VideoDatabase extends BaseDatabase {

    public static TABLE_NAME = "videos"

    public async findVideos():Promise<any> {

        const result = await BaseDatabase.connection(VideoDatabase.TABLE_NAME)
        return result;
    }

    public async createVideo(newVideo:Videos):Promise<void> {
        await BaseDatabase.connection(VideoDatabase.TABLE_NAME).insert({
            id: newVideo.getId(),
            titulo: newVideo.getTitulo(),
            segundos: newVideo.getSegundos(),
            upload_date: newVideo.getUploadDate()
          })
    }

    public async updateVideo(newVideo:Videos, id:string):Promise<void> {

        await BaseDatabase.connection.update({
            titulo: newVideo.getTitulo,
            segundos: newVideo.getSegundos,
            upload_date: newVideo.getUploadDate
          }).from("videos").where({id: id})
    }

    public async deleteVideo(id:string):Promise<void> {
        await BaseDatabase.connection.delete().from(VideoDatabase.TABLE_NAME).where({id: id})
    }
}