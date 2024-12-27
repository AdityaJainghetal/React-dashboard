const express =require("express");
const route =express.Router();
const stuController = require("../controllers/userStudent");

route.post("/datasave",stuController.dataSave);
route.get("/datadisplay", stuController.dataDisplay);
route.post("/datadisplay", stuController.dataSearch);
route.get("/deleteddisplay", stuController.deleteDataDisplay);
route.post("/recordDelete", stuController.recordDelete);
route.get("/editdisplay", stuController.editDisplay);
route.post("/editsave", stuController.editDataSave);
module.exports= route;