import { Component, OnInit } from '@angular/core';
import { HeroesServicio } from '../../../servicios/heroes.servicio';
import { IntHeroe } from 'src/app/interfaces/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesTotal: IntHeroe[] = [];
  heroes: IntHeroe[] = [];
  constructor(
    private hs: HeroesServicio
  ) { }

  ngOnInit() {
  
    this.hs.heroes_getFromApi('a').subscribe( data => {
      this.heroesTotal = data['results'];
      this.heroes = this.heroesTotal.slice(0,9);
      console.log('heroes seleccionados', this.heroes);
    });
  }

}
