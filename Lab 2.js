var MyTasks = []; // Brian Coppinger
function addTasks(task) {
    return MyTasks.push(task);
}
function listAllTasks(task) {
    console.log("Beginning");
    MyTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End");
}
function deleteTasks(task) {
    var index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item: " + task + " not found");
    }
    return MyTasks.length;
}
addTasks("element1");
addTasks("element2");
addTasks("element3");
listAllTasks();
deleteTasks("element1");
listAllTasks();
