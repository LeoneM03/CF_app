//basics
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import { LoginComponent } from './components/vistas/login/login.component';
import { DashboardComponent } from './components/vistas/dashboard/dashboard.component';
import { EditarComponent } from './components/vistas/editar/editar.component';
import { NuevoComponent } from './components/vistas/nuevo/nuevo.component';
import { PerfilComponent } from './components/vistas/perfil/perfil.component';
import { TransitionComponent } from './components/transition/transition.component';
import { NotFoundComponent } from './components/vistas/not-found/not-found.component';



//librerias
import {ReactiveFormsModule, FormsModule} from '@angular/forms';	
import {HttpClient, HttpClientModule, HttpContext} from "@angular/common/http";
import { BodyComponent } from './components/body/body.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderbarComponent,
    LoginComponent,
    DashboardComponent,
    EditarComponent,
    NuevoComponent,
    PerfilComponent,
    routingComponents,
    TransitionComponent,
    BodyComponent,
    TaskListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
