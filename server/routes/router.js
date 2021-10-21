const express = require("express");
const { addUser, homeRoute, updateUser } = require("../service/render");
const route = express.Router();
const controller = require("../controller/controller");

/*
 * @description Home page route
 * @method GET /
 */
route.get("/", homeRoute);

/*
 * @description Add user route
 * @method GET /add-user
 */

route.get("/add-user", addUser);

/*
 * @description Update user route
 * @method GET /update-user
 */

route.get("/update-user", updateUser);
 
// API List
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
