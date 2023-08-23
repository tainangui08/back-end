module.exports = app => {

    const newplay = require("../controllers/newPlay.controller.js")


    let router = require("express").Router();

    router.post("/", newplay.create);

    router.get("/", newplay.findAll);

    router.get("/:id", newplay.findOne)

    router.put('/:id', newplay.update)

    router.delete('/:id', newplay.delete)

    app.use('/api/newplay', router)

    

}