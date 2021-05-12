import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/*  import{ CategoryInt } from '../models/category.interface';  */
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

  constructor(public categoryService: TaskService) { }
  
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res => this.dataSource.data = res);
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element){
    this.categoryService.selectedCat = element;
  }
  onDelete(id: string){
    this.categoryService.deleteCategory(id);
  }

  onSaveForm(){
    if(this.categoryService.selectedCat.id == null){
      let newCat = {
        name: this.categoryService.selectedCat.name
      }
      this.categoryService.createCategory(newCat);
    }else{
      this.categoryService.editCategory(this.categoryService.selectedCat);
    }
    
    this.categoryService.selectedCat = {
      id: null,
      name: '',
    }
  }
}
