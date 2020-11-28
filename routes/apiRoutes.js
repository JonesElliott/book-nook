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

};