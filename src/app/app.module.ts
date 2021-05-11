import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialsModule } from './materials/materials.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Firebase */
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/* Components */
import { MyNavComponent } from './my-nav/my-nav.component';
import { ListadoComponent } from './listado/listado.component';
import { CategoryService} from './services/task-service.service'

import { CategoriesComponent } from './categories/categories.component';
import { CreateTaskComponent } from './create-task/create-task.component';

import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { HistoricalComponent } from './historical/historical.component';



@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ListadoComponent,
    CategoriesComponent,
    CreateTaskComponent,
    AllTasksComponent,
    HistoricalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
