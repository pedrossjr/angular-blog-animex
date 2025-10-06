import { Component, Input, OnInit } from '@angular/core';
import { dataMoreFake } from '../../data/dataMoreFake';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-card',
  standalone: true,
  imports: [],
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.css']
})

export class MoreCardComponent implements OnInit {

  @Input() id: string | null = "0";
  @Input() moraCardDatePublish: string = "";
  @Input() moreCardTitle: string = "";
  @Input() moreCardDescription: string = "";
  @Input() moreCardPhotoCover: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  private setValuesToComponent(id:string | null) {
    const moreCard = dataMoreFake.find(artigo => artigo.id === id);

    if (moreCard) {
      this.moraCardDatePublish = moreCard.moraCardDatePublish;
      this.moreCardTitle = moreCard.moreCardTitle;
      this.moreCardDescription = moreCard.moreCardDescription;
      this.moreCardPhotoCover = moreCard.moreCardPhotoCover;
    }
  }
}
