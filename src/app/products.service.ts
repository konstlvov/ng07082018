import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    @Inject(HttpClient) private httpClient: HttpClient
  ) { }

  public _baseUrl: string = 'http://localhost:3000';

  public products$(): Observable<IProduct[]> {
    return this.httpClient.get(`${this._baseUrl}/products`)
      .pipe(
        //map((res: { data: IProduct[] }) => res.data), // хз зачем надо, с ним еще и не работает
        catchError((err) => of([]))
      );
  }



}
