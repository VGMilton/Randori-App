import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from 'src/Components/sidenav/sidenav.component';
import { BodyComponent } from 'src/Components/body/body.component';
import { PuntajesComponent } from 'src/Components/puntajes/puntajes.component';
import { RandorisComponent } from 'src/Components/randoris/randoris.component';
import { RegistroComponent } from 'src/Components/registro/registro.component';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent,
    BodyComponent,
    SidenavComponent,
    PuntajesComponent,
    RandorisComponent,
    RegistroComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
