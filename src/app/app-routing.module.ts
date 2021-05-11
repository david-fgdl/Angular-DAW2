import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CommonModule } from '@angular/common';

/*Componentes*/
import { ListadoComponent } from './listado/listado.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  /* { path: 'createTask', component: ListadoComponent }, */
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [/*CommonModule,*/RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
