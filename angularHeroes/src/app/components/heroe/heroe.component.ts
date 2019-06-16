import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};
  constructor(public activatedRoute: ActivatedRoute,
              public heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params =>{
    // tslint:disable-next-line:no-string-literal
    this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }

}
