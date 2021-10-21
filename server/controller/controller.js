const en = require("express");
var Userdb = require("../model/model");

//Create and save new user

exports.create = (req, res) => {
  //  Validate request
  if (!req.body) {
    res.status(400).send({ message: "content cannot be empty!" });
    return;
  }
  // new user
  const user = new Userdb({
    name: req.body.name,
    email:req.body.gmail, 
    
    gender: req.body.gender,
    status: req.body.status,
  });
  // save user in the database
  console.log(user);
  user
    .save(user)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.status(500).send({
        //finding

        // end of
        message:
          `err.message ${id} ` ||
          "Some error occurred while creating a create operation",
      });
    });
};

//Retrieve and return all/single user

exports.find = (req, res) => {
  if(req.query.id){
    const id = req.query.id;

    Userdb.findById(id)
    .then(data =>{
      if(!data){
        res.status(404).send({message:`The user is not present in the database`+id});
      }
      else{
        res.send(data);
      }
    })
    .catch(err =>{
      res.status(500).send({message:`The database have some issue with id :` +id})

    })
  }
  else{
 Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error encountered while fetching info",
      });
    });
  }
 
};

//update a new identified user by user id
exports.update = (req, res) => {
  // Evalution
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to update can not be empty " });
  }

  // Identifying
  const id = req.params.id;

  // Working
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot update user with ${id} . Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user info " });
    });
};

// Delete user  by user id

exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `cannot delete with id ${id}. May be id wrong` });
      } else {
        res.send({ message: "user was deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could Not delete user with id =" + id,
      });
    });
};
