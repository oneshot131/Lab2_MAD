"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.MyTasks = [];
    }
    toDoClass.prototype.addTasks = function (task) {
        return this.MyTasks.push(task);
    }; // when changing to an interface remove let, fuction etc and add this. keyword
    toDoClass.prototype.listAllTasks = function () {
        console.log("Beginning");
        this.MyTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End");
    }; // when changing to an interface add this keyword. only change needed.
    toDoClass.prototype.deleteTasks = function (task) {
        var index = this.MyTasks.indexOf(task);
        if (index > -1) {
            this.MyTasks.splice(index, 1);
        }
        else {
            console.log("Item: " + task + " not found");
        }
        return this.MyTasks.length;
    }; // add this keyword.
    return toDoClass;
}()); // ensure naming terms are exact same as exporting class. 
var testClass = new toDoClass();
testClass.addTasks("element1");
testClass.addTasks("element2");
testClass.addTasks("element3");
testClass.listAllTasks();
testClass.deleteTasks("element1");
testClass.listAllTasks();
