import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public categories: any[];
  
  constructor(public task: TaskService) { }

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
  }
  deselect(){
    this.task.selected = {
        id: null,
        task: '',
        category: '',
        state: '',
        timestamp: ''
    }
  }
}
