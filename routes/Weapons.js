const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

//Get all Weapons
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM Weapons", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
});


// Gets one product
router.get("/:id", (req, res) => {
    try {
      con.query(`SELECT * FROM Weapons WHERE id = ${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });


  router.put("/:id", (req, res) => {
    const {
        name,
        image,
        description,
        price,
    } = req.body;
    try {
      con.query(
        //When using the ${}, the content of con.query MUST be in the back tick
        `UPDATE Weapons set name="${name}", image="${image}", description="${description}", price="${price}" WHERE id = "${req.params.id}"`,
        (err, result) => {
          if (err) throw err;
          res.send("product successfully updated");
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }} 
  );


  // Add new Weapons
  router.post("/", (req, res) => {
    const {
      name,
      image,
      description,
      price,
    } = req.body;
    try {
      con.query(
        //When using the ${}, the content of con.query MUST be in the back tick
        `INSERT INTO Weapons (
            name,
            image,
            description,
            price) VALUES ( "${name}", "${image}", "${description}", "${price}" )`,
        (err, result) => {
          if (err) throw err;
          res.send("product successfully created");
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }}
 );
  
  // Delete one Weapons
  router.delete("/:id", (req, res) => {
      try {
        con.query(`DELETE FROM Weapons WHERE id = ${req.params.id}`, (err, result) => {
          if (err) throw err;
          res.send("Sucessfully deleted this product");
        });
      } catch (error) {
        console.log(error);
        res.status(400).send(error);
      }}
    );


module.exports = router;