import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public product: IProduct;

  @Input()
  public isOdd: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
