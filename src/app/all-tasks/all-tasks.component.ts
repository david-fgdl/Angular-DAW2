import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import{TaskInt} from '../models/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-allTasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  displayedColumns: string[] = ['task', 'category', 'state', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

   @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
      this.taskService.getAllTasks().subscribe(res => this.dataSource.data = res);  
  }
  
  ngAfterViewInit() {
     this.dataSource.sort = this.sort; 
  }

  onEdit(element){
    this.taskService.selected = element;
  }
  onDelete(id: string){
    this.taskService.deleteTask(id);
  }

  StateSelector(object: string){
    if(object == "pending"){
      this.taskService.getTasksPendientes().subscribe(res => this.dataSource.data = res); 
    }
    if(object == "process"){
      this.taskService.getTasksPendientes().subscribe(res => this.dataSource.data = res); 
    }
    if(object == "all"){
      this.taskService.getAllTasks().subscribe(res => this.dataSource.data = res); 
    }
  } 
}