"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/", function (request, response) {
    response.status(200).send("OK");
});
var port = 3333;
app.listen();
