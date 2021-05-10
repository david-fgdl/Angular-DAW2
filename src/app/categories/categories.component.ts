import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CategoryInt } from '../../models/category.interface';
import { CategoryService } from '../services/category.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  
  constructor(private categoryService: CategoryService) { }
  
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}