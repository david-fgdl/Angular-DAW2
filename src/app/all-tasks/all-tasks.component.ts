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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(res => this.dataSource.data = res);
  }

}
