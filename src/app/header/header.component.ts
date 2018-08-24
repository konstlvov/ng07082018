import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public logo: string;

  @Input()
  public placeholder: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public onSearch(value: string): void {
    this.search.emit(value);
  }

}
