const axios = require('axios');


// Home page renderer wit users
exports.homeRoute = (req, res) => {
  axios.get('http://localhost:3000/api/users')
  .then(function(response){

    res.render('index',{users:response.data})
  })
  .catch(err =>{
    res.send(err);
  })
};

exports.addUser = (req, res) => {
  res.render("add_user.ejs");
};


exports.updateUser = (req, res) => {
  axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})

  .then(fullUser => {
    console.log(fullUser.data)
      res.render("update_user",{user:fullUser.data});
  })
  .catch(err=>{
    res.send(err);
  })

};
