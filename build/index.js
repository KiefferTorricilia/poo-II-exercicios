"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = require("./database/knex");
const videos_1 = require("./models/videos");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req, res) => {
    res.send("Pong!");
});
app.get("/videos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, knex_1.db)("videos");
        const resultPoo = result.map((user) => {
            return new videos_1.Videos(user.id, user.titulo, user.segundos, user.upload_date);
        });
        console.log(resultPoo);
        res.status(200).send(resultPoo);
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.post("/videos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const titulo = req.body.titulo;
        const segundos = req.body.segundos;
        const upload_date = req.body.upload_date;
        const newVideo = new videos_1.Videos(id, titulo, segundos, upload_date);
        yield (0, knex_1.db)("videos").insert({
            id: newVideo.getId(),
            titulo: newVideo.getTitulo(),
            segundos: newVideo.getSegundos(),
            upload_date: newVideo.getUploadDate()
        });
        res.status(200).send("Usuário cadastrado com sucesso");
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.put("/videos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { titulo, segundos, upload_date } = req.body;
        const newVideo = new videos_1.Videos(id, titulo, segundos, upload_date);
        yield knex_1.db.update({
            titulo: newVideo.getTitulo,
            segundos: newVideo.getSegundos,
            upload_date: newVideo.getUploadDate
        }).from("videos").where({ id: id });
        res.status(200).send("Video alterado com sucesso.");
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
app.delete("/videos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const video = new videos_1.Videos(id, "23", 0, "23");
        yield knex_1.db.delete().from("videos").where({ id: id });
    }
    catch (error) {
        console.log(error);
        if (req.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
//# sourceMappingURL=index.js.map