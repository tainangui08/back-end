module.exports = app => {

    const newplay = require("../controllers/newPlay.controller.js")


    let router = require("express").Router();

    // rota para criar
    router.post("/", newplay.create);

    //rota pata buscar todos os dados
    router.get("/", newplay.findAll);

    // rota para buscar um dado pelo id
    router.get("/:id", newplay.findOne)

    // rota para atualizar um dado pelo id
    router.put('/:id', newplay.update)

    // rota para deletar um dado pelo id
    router.delete('/:id', newplay.delete)

    app.use('/api/newplay', router)

    

}