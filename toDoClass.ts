import {toDoInterface} from './toDoInterface';

class toDoClass implements toDoInterface
{
    MyTasks:Array<string> = [];

    addTasks(task:string):number
    {
        return this.MyTasks.push(task);
    } // when changing to an interface remove let, fuction etc and add this. keyword

    listAllTasks():void
    {
        console.log("Beginning");
        this.MyTasks.forEach(function(task)
        {
            console.log(task);
        })
        console.log("End");
    }// when changing to an interface add this keyword. only change needed.

    deleteTasks(task:string):number
    {
        let index:number = this.MyTasks.indexOf(task);

        if(index > -1)
        {
            this.MyTasks.splice(index,1);
        }
        else
        {
            console.log("Item: "+task+" not found");
        }
        return this.MyTasks.length;
    }// add this keyword.
}// ensure naming terms are exact same as exporting class. 

let testClass = new toDoClass();
testClass.addTasks("element1");
testClass.addTasks("element2");
testClass.addTasks("element3");
testClass.listAllTasks();
testClass.deleteTasks("element1");
testClass.listAllTasks();