import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { InformationComponent } from './information/information.component';
import { AccordeonComponent } from './accordeon/accordeon.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubmenuComponent,
    InformationComponent,
    AccordeonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
