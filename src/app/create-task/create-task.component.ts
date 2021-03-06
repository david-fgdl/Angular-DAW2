import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {
  public categories: any[];

  NewTask = {
    task: '',
    category: 'Categoría no Seleccionada',
    state: 'Pendiente',
    timestamp: new Date().toLocaleString()
  }

  constructor(public task: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task.getAllCategories().subscribe(res => this.categories = res)
  }

  onSelect(element){
    this.NewTask.category = element.name;
  }

  onSave() {
    this.task.createTask(this.NewTask);

    this.router.navigate(['/listado']);
  }
}
