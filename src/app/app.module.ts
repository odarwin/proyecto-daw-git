import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './secundarias/producto/producto.component';
import { NoticiasComponent } from './secundarias/noticias/noticias.component';
import { CabeceraComponent } from './CabeceraFooter/cabecera/cabecera.component';
import { FooterComponent } from './CabeceraFooter/footer/footer.component';
import { QuienesSomosComponent } from './secundarias/quienes-somos/quienes-somos.component';



const rutas: Routes = [
 { path: '', component: IndexComponent },
 { path: 'producto', component: ProductoComponent},
 { path: 'noticias',component: NoticiasComponent},
 {path: 'cabezera',component: CabeceraComponent},
 {path: 'quienes-somos',component: QuienesSomosComponent}
];



@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, IndexComponent, ProductoComponent, NoticiasComponent, CabeceraComponent, FooterComponent, QuienesSomosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
