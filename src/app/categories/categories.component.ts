import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource();
  oldCat: string;
  newCat: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public categoryService: TaskService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element) {
    this.categoryService.selectedCat = element;
    this.oldCat = element.name;
  }
  onDelete(id: string) {
    this.categoryService.deleteCategory(id);
  }

  onSaveForm() {
    if (this.categoryService.selectedCat.id == null) {
      let newCat = {
        name: this.categoryService.selectedCat.name
      }
      this.categoryService.createCategory(newCat);
    } else {
      this.newCat = this.categoryService.selectedCat.name;
      this.categoryService.editCategory(this.categoryService.selectedCat);
      (this.categoryService.tasks).forEach(tasks => {
        tasks.forEach(task => {
          if (task.category == this.oldCat) {
            this.categoryService.selected = task;
            this.categoryService.selected.category = this.newCat
            this.categoryService.editTask(this.categoryService.selected);
          }
        })
      })
    }
    this.categoryService.selectedCat = {
      id: null,
      name: '',
    }
  }
}
