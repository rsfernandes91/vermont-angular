import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
