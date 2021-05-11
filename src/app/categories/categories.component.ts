import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import{ CategoryInt } from '../models/category.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
    this.taskService.getAllCategories().subscribe(res => this.dataSource.data = res);
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element){
    this.taskService.selectedCat = element;
  }
  onDelete(id: string){
    this.taskService.deleteCategory(id);
  }

}
