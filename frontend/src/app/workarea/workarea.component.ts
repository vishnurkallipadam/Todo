import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})
export class WorkareaComponent implements OnInit {

  constructor(private todoservice:TodoService) { }
  task:any='';
  description:any=''
  taskArray:Array<{name:String,description:String,date:String,status:String}> = [];
  ngOnInit(): void {
    this.todoservice.getTask().subscribe((data)=>{
      console.log(data);
      
      this.taskArray=JSON.parse(JSON.stringify(data))
    })
  }

  addTask(){
    console.log(this.task);
    console.log(this.description);
    this.todoservice.createTask(this.task,this.description)
    .subscribe((data)=>{
      this.ngOnInit()
      this.task==''
      this.description==''
      
    })
  }

  completeTask(task:any){
    if(confirm("Are you sure you want to mark task as completed??")) {
      console.log(task._id);
      
      this.todoservice.completeTask(task._id).subscribe((data)=>{
        this.ngOnInit()
      })
      
    }else{
      this.ngOnInit()
    }
  }

  deleteTask(task:any){
    if(confirm("Are you sure you want to delete the task")) {
      console.log(task._id);
      
      this.todoservice.deleteTask(task._id).subscribe((data)=>{
        this.ngOnInit()
      })
      
    }else{
      this.ngOnInit()
    }
  }



}
