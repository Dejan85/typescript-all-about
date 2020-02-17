"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(ID, title, finished);
});
var logTodo = function (ID, title, finished) {
    console.log("\n    The todo with ID: " + ID + "\n    Has a title of: " + title + "\n    Is it finisherd? " + finished);
};
