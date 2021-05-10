import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*Componentes*/
import { ListadoComponent } from './listado/listado.component';
import { HistoricalComponent } from './historical/historical.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'historical', component: HistoricalComponent }
  //{ path: 'createTask', component:  }
  //{ path: 'categories', component:  }
];

@NgModule({
  imports: [/*CommonModule,*/RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
