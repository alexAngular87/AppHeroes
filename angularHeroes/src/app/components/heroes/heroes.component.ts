import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  constructor(public _heroes: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }
verHeroe(idx: number){
  this.router.navigate(['/heroe', idx]);

}
}
