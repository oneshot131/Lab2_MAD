let MyTasks:Array<string> = []; // Brian Coppinger

function addTasks(task:string):number
{
    return MyTasks.push(task);
} 

function listAllTasks(task:string):void
{
    console.log("Beginning");
    MyTasks.forEach(function(task)
    {
        console.log(task);
    })
    console.log("End");
}

function deleteTasks(task:string):number
{
    let index:number = MyTasks.indexOf(task);

    if(index > -1)
    {
        MyTasks.splice(index,1);
    }
    else
    {
        console.log("Item: "+task+" not found");
    }
    return MyTasks.length;
}

addTasks("element1");
addTasks("element2");
addTasks("element3");

//listAllTasks();

deleteTasks("element1");

//listAllTasks();