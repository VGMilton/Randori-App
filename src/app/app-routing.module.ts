import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { PuntajesComponent } from 'src/Components/puntajes/puntajes.component';
import { RandorisComponent } from 'src/Components/randoris/randoris.component';
import { RegistroComponent } from 'src/Components/registro/registro.component';
import { SettingsComponent } from 'src/Components/settings/settings.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,

  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'randoris',
    component: RandorisComponent,
  },
  {
    path:'scores',
    component: PuntajesComponent,
  },
  {
    path:'forms',
    component: RegistroComponent,
  },
  {
    path:'settings',
    component: SettingsComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
