import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductFilterPipe } from './common/pipes/product-filter.pipe';
import {ProductsService} from './products.service';
import {HttpClientModule} from '@angular/common/http';

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
    ,HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [CourseComponent]
})
export class AppModule { }
