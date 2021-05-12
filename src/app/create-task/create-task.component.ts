import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  taskInput = new FormControl('', Validators.required);
  selectCat = new FormControl('', Validators.required);

  public categories: any[];
  public taskForm: FormGroup;

  constructor(public task: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task.getAllCategories().subscribe(res => this.categories = res)
  }

  onSave() {
    this.task.createTask(this.task.selected);
    let newTask = {
      task: '',
      category: '',
      state: 'Pending',
      timestamp: ''
    }

    this.router.navigate(['/list-task']);
  }
}
