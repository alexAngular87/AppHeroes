import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HeroeService } from '../../services/heroe.service';
=======
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

>>>>>>> 70e3a2c9e4e46fc61c77525724fe6897ea32c006

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

<<<<<<< HEAD
  constructor(public _infoHeroes: HeroeService) { }
=======

  constructor(public _heroes: HeroesService,
              private router: Router) { }
>>>>>>> 70e3a2c9e4e46fc61c77525724fe6897ea32c006

  ngOnInit() {
  }
verHeroe(idx: number){
  this.router.navigate(['/heroe', idx]);

}
}
