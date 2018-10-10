import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// // MODULOS
import { PagesModule } from './pages/pages.module';
import { PanelModule } from './panel/panel.module';
import { FormsModule } from '@angular/forms';
//RUTAS
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    APP_ROUTES,
    PagesModule,
    PanelModule,
    FormsModule

  ],
  providers: [],
})
export class AppModule { }
