import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/vistas/login/login.component';
import { DashboardComponent } from './components/vistas/dashboard/dashboard.component';
import { PerfilComponent } from './components/vistas/perfil/perfil.component';
import { NuevoComponent } from './components/vistas/nuevo/nuevo.component';
import { EditarComponent } from './components/vistas/editar/editar.component';
import { TransitionComponent } from './components/transition/transition.component';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import { NotFoundComponent } from './components/vistas/not-found/not-found.component';





const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch: 'full'},
  { path: 'login',  component: LoginComponent },
  { path: 'transition', component: TransitionComponent },
  { path: 'dashboard',  component: DashboardComponent},
  { path: 'perfil',  component: PerfilComponent },
  { path: 'new-task',  component: NuevoComponent },
  { path: 'editar/:id', component: EditarComponent },
  {
    //rutas hijo para que el sliderbar las controle
    path: 'sliderbar',
    component: SliderbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'perfil', component: PerfilComponent },
    ]
    
  },
  // página 404
  { path: '**', component: NotFoundComponent }
  ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, PerfilComponent, NuevoComponent, EditarComponent]
