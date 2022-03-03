import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  server_address:String = 'http://localhost:5200';

  createTask(name:any,description:any){
    return this.http.post<any>(`${this.server_address}/create`,{name,description})
  }

  getTask(){
    return this.http.get<any>(`${this.server_address}/getTask`)  
  }

  completeTask(id:any){
    return this.http.get<any>(`${this.server_address}/completeTask/`+id)
  }

  deleteTask(id:any){
    return this.http.get<any>(`${this.server_address}/deleteTask/`+id)
  }


}
