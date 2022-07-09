import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public helloWorld: string ="Hello World"

    hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };

  ngOnInit(): void {
  }

}
