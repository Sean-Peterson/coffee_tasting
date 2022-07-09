import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public helloWorld: string ="Hello World"

  public hero: Hero = {
      id: 1,
      name: 'Morgan',
    };

  public heroes = HEROES;

  public selectedHero?: Hero;
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
