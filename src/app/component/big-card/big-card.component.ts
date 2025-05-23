import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  photoCover:String=""

  @Input()
  cardTitle:String=""

  @Input()
  cardDescription:String=""

  @Input()
  Id:String="0"

  constructor() { }

  ngOnInt(): void{

  }

}
