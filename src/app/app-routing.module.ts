import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*Componentes*/
import { ListadoComponent } from './listado/listado.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateTaskComponent } from './create-task/create-task.component';

import { HistoricalComponent } from './historical/historical.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'createTask', component: CreateTaskComponent },
  //{ path: 'historical', component: HistoricalComponent }
];

@NgModule({
  imports: [/*CommonModule,*/RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
