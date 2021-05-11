import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  public categories: any[];
  public taskForm: FormGroup;

  constructor(public task: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task.getAllCategories().subscribe(res => this.categories = res)
  }

  onSave(){
    this.task.createTask(this.task.selected);

    this.router.navigate(['/list-task']);
  }

}
