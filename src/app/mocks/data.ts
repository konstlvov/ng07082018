import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

const products: IProduct[] = [
  {
    title: 'Обои',
    serial: 1045,
    author: 'Fromental',
    price: 1500.85,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 1',
    serial: 1045,
    author: 'Puma',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 2',
    serial: 1045,
    author: 'Nike',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 3',
    serial: 1045,
    author: 'Puma',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 4',
    serial: 1045,
    author: 'Fromental',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 5',
    serial: 1045,
    author: 'Adidas',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 6',
    serial: 1045,
    author: 'Nike',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 7',
    serial: 1045,
    author: 'Adidas',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои',
    serial: 1045,
    author: 'Nike',
    price: 1500.45,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 8',
    serial: 1045,
    author: 'Puma',
    price: 1500,
    src: 'assets/img/img1.jpg'
  },
  {
    title: 'Обои 8',
    serial: 1045,
    author: 'Puma',
    price: 1500,
    src: ''
  },

];

export const products$: Observable<IProduct[]> = of(products)
  .pipe(
   // этот map и filter не пропускает наружу продукты с пустым src
    map((productsArr: IProduct[]) =>
      productsArr.filter((product: IProduct) => product.src !== '')),
    delay(3000)
  );
