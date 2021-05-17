import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";

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

  constructor(public categoryService: TaskService, private router: Router) { }

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
  onDelete(element) {
    this.categoryService.deleteCategory(element.id);
    this.oldCat = element.name;
    this.changeCat(true);
  }

  deselect(){
    this.categoryService.selectedCat = {
      id: null,
      name: '',
    }
    this.router.navigate(['/categories']);
  }

  onSaveForm() {
    if (this.categoryService.selectedCat.id == null) {
      let newCat = {
        name: this.categoryService.selectedCat.name
      }
      this.categoryService.createCategory(newCat);
    } else {
      this.categoryService.editCategory(this.categoryService.selectedCat);
      this.changeCat(false);
    }
    this.categoryService.selectedCat = {
      id: null,
      name: '',
    }

    this.router.navigate(['/categories']);
  }

  private changeCat(del: boolean){
    if(del){
      this.newCat = "Categoria Eliminada"
    }else{
      this.newCat = this.categoryService.selectedCat.name;
    }
    
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
}
