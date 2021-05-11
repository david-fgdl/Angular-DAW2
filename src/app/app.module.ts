import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* import { ReactiveFormsModule, FormsModule } from '@angular/forms'; */

/* Firebase */
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
/******************/

/* Components */
import { MyNavComponent } from './my-nav/my-nav.component';
import { TaskService } from './services/task.service';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { FormComponent } from './form/form.component';
/* import { CategoriesComponent } from './categories/categories.component'; */
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AllTasksComponent,
    FormComponent,
    /* CategoriesComponent, */
    CreateTaskComponent,
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
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
