const { Book } = require("../models");
const db = require("../models");

module.exports = function (app) {

   // Retrieve all saved books in db
   app.get("/api/books", (req, res) => {
    db.Book.find({})
      .then(dbBook => {
        console.log(dbBook);
        res.json(dbBook).code(302);
      })
      .catch(error => {
        console.log(message);
        res.json(error)
      });
  });

  // Creates a new book in the db
  app.post("/api/books", ({ body }, res) => {
    const book = body;
    console.log(body);

    db.Book.create({
      title: book.title,
      author: book.author,
      description: book.description,
      image: book.image,
      link: book.link
    })
      .then(dbBook => {
        console.log(dbBook);
        res.json(dbBook).code(201);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

};