import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-card',
  standalone: true,
  imports: [],
  templateUrl: './more-card.component.html',
  styleUrl: './more-card.component.css'
})
export class MoreCardComponent {

  moreCardTitle:string = "";
  moraCardDatePublish:string ="";
  moreCardDescription:string = "";
  moreCardPhotoCover:string = "";

  constructor() { }

  OnInit(): void {}

}
