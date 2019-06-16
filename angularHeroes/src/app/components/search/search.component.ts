import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public _heroeService:HeroesService) {   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.heroes = this._heroeService.buscarHeroes(params['termino']);
    });
  }

}
