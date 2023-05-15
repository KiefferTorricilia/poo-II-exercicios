export class Videos {
    constructor (
        private id: string,
        private titulo: string,
        private segundos: number,
        private uploadDate: string
    ){}

    public getId = ():string => {
        return this.id
    };

    public getTitulo = ():string => {
        return this.titulo
    };

    public getSegundos = ():number => {
        return this.segundos
    };

    public getUploadDate = ():string => {
        return this.uploadDate
    };

    public setTitulo = (input:string):void => {
        this.titulo = input;
    };

    public setSegundos = (input:number):void => {
        this.segundos = input;
    };

    public setUploadDate = (input:string):void => {
        this.uploadDate = input
    }

}