export interface toDoInterface
{
    MyTasks:Array<string>;
    addTasks(task:string):number;
    listAllTasks():void;
    deleteTasks(task:string):number;
}