import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInscriptionComponent } from './inscription/app.component.inscription';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpClientModule } from '@angular/common/http'
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'inscription', component: AppInscriptionComponent},
  {path: 'connexion', component: ConnexionComponent}
]


@NgModule({
  declarations: [ 
    AppInscriptionComponent,
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    AccueilComponent,
    AdminComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  
    FormsModule,
    [HotToastModule.forRoot()],
     
      RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
