import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {frutaComponent} from './frutas/frutas.component';
import { empleadosComponent } from './Empleaos/Empleado.component';
import { ContactosComponent } from './contactos/contactos.component'
import { personaComponent } from './personas/persona.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ColumnasComponent } from './columnas/columnas.component';
import { RouterModule, Routes } from '@angular/router';

const routas: Routes = [{path:'colunas', component:ColumnasComponent},
                        {path: 'inicio', component:InicioComponent},
                        {path: 'foot', component:FooterComponent},
                        {path:'frutas', component:frutaComponent}
                        ];
 
@NgModule({
  declarations: [
    AppComponent,
    frutaComponent, 
    empleadosComponent, ContactosComponent,
    personaComponent,
    NavComponent,
    InicioComponent,
    FooterComponent,
    ColumnasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routas)
    //
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
