import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialsModule } from './materials/materials.module';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

/* Components */
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { HistoricalComponent } from './historical/historical.component';

import { MyNavComponent } from './my-nav/my-nav.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    HistoricalComponent,
    MyNavComponent,
    ListadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MaterialsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
