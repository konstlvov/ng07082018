import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SafeHtml} from '@angular/platform-browser/src/security/dom_sanitization_service';
//import {products$} from './mocks/data';
import {ProductsService} from './products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', ']']
  // encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
  public logo = 'assets/img/logo.png';
  public placeholder = 'Более 1000 товаров';
  public searchText;
  public loading = false;
  public products$: Observable<IProduct[]>;

  // TODO title pipe ?
  public constructor(
    private _sanitazer: DomSanitizer,
    private _productsService: ProductsService
  ) {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
    //products$.subscribe((products: IProduct[]) => {
    //   this.productsData = products;
    // });
  }

  public ngOnInit(): void {
    this.products$ = this._productsService.products$();
  }


  public span(): SafeHtml {
    return this._sanitazer.bypassSecurityTrustHtml(`<span style="color:red">Hi ${this.searchText || ''} </span>`);
  }

}
