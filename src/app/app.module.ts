import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingSectionComponent } from './trending-section/trending-section.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingSectionComponent,
    WelcomeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
