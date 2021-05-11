import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*Componentes*/
import { AllTasksComponent } from './all-tasks/all-tasks.component';
/* import { CategoriesComponent } from './categories/categories.component'; */
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: AllTasksComponent },
  { path: 'createTask', component: CreateTaskComponent },
  /* { path: 'categories', component: CategoriesComponent }, */
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
