import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() home?: Hero;

  constructor() { }

  public hero: Hero = {
      id: 1,
      name: 'Morgan',
    };

  public heroes = HEROES;

  ngOnInit(): void {
  }

}
