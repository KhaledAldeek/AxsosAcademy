const AuthorController = require("./../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/create", AuthorController.createNewAuthor);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/author/:id", AuthorController.findAuthor);
    app.delete("/api/delete/:id", AuthorController.deleteAuthor);
    app.put("/api/edit/:id", AuthorController.updateAuthor);
}