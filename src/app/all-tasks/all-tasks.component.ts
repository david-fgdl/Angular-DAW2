import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-allTasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  displayedColumns: string[] = ['task', 'category', 'state', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();
  public historical=false;
  seleccion: string;

   @ViewChild(MatSort) sort: MatSort;
  
  constructor(public taskService: TaskService) { }
  
  ngOnInit(): void {
      this.taskService.getTasksNoTerminadas().subscribe(res => this.dataSource.data = res);  
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
    if(object == "all"){
      this.historical = false;
      this.taskService.getTasksNoTerminadas().subscribe(res => this.dataSource.data = res); 
    }
    if(object == "pending"){
      this.historical = false;
      this.taskService.getTasksPendientes().subscribe(res => this.dataSource.data = res); 
    }
    if(object == "process"){
      this.historical = false;
      this.taskService.getTasksProceso().subscribe(res => this.dataSource.data = res); 
    }
    if(object == "historical"){
      this.historical = true;
      this.taskService.getTasksTerminadas().subscribe(res => this.dataSource.data = res); 
    }
  } 
}