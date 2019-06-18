import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() heroes: Heroe[] = [];
  @Input() index: number;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              public _heroeService:HeroesService) {   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.heroes = this._heroeService.buscarHeroes(params['termino']);
    this.termino = params['termino'];
    });
  }

}
