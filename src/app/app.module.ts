import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { SterileComponent } from './sterile/sterile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CosmeticsComponent,
    SterileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
