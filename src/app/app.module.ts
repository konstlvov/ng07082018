import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductFilterPipe } from './common/pipes/product-filter.pipe';

@NgModule({
  declarations: [
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
