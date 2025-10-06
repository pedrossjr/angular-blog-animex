import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  Id:string | null = "1";
  @Input()
  datePublish:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = "";
  @Input()
  photoCover:string = "";

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
