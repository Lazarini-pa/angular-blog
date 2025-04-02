import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:String = ""
  contentTitle:String = ""
  contentDescription:String = ""
    private id:String | null = "0"

  constructor(
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:String | null){
     const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
