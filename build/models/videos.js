"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videos = void 0;
class Videos {
    constructor(id, titulo, segundos, uploadDate) {
        this.id = id;
        this.titulo = titulo;
        this.segundos = segundos;
        this.uploadDate = uploadDate;
        this.getId = () => {
            return this.id;
        };
        this.getTitulo = () => {
            return this.titulo;
        };
        this.getSegundos = () => {
            return this.segundos;
        };
        this.getUploadDate = () => {
            return this.uploadDate;
        };
        this.setTitulo = (input) => {
            this.titulo = input;
        };
        this.setSegundos = (input) => {
            this.segundos = input;
        };
        this.setUploadDate = (input) => {
            this.uploadDate = input;
        };
    }
}
exports.Videos = Videos;
//# sourceMappingURL=videos.js.map