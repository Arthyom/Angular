import { Component, OnInit } from '@angular/core';
import { IntHeroe } from '../../../interfaces/heroes';
import { HeroesServicio } from '../../../servicios/heroes.servicio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: IntHeroe[] = [];
  constructor(
    private hs: HeroesServicio
  ) { }

  ngOnInit() {
    this.hs.heroes_getFromApi('a').subscribe( data => {
      this.heroes = data;
      console.log('heroes seleccionados', this.heroes);
    });
  }

}
