import { Component, OnInit, Input } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { dataFake } from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';
import { MoreCardComponent } from "../../components/more-card/more-card.component";
import { FooterBarComponent } from "../../components/footer-bar/footer-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, MoreCardComponent, FooterBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  @Input()
  id:string | null = "0";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = "";
  @Input()
  photoCover:string = "";

  constructor(
    /* private route:ActivatedRoute*/
  ) { }


  ngOnInit(): void {
   /* this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    );

    this.setValuesToComponent(this.id);*/
  }
/*
    setValuesToComponent(id:string | null){
      const result = dataFake.filter(
        article => article.id.toString() === id
      )[0];


      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photoCover = result.photoCover;
    }
*/
}
