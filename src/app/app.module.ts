import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CourseComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
