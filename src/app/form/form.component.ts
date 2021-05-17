import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public categories: any[];
  
  constructor(public task: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task.getAllCategories().subscribe(res => this.categories = res);
  }

  onSaveForm(){
    this.task.editTask(this.task.selected);

    this.task.selected = {
        id: null,
        task: '',
        category: '',
        state: '',
        timestamp: ''
    }

    this.router.navigate(['/listado']);
  }
  deselect(){
    this.task.selected = {
        id: null,
        task: '',
        category: '',
        state: '',
        timestamp: ''
    }
    this.router.navigate(['/listado']);
  }
}
