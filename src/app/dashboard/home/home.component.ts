import { Component, OnInit } from '@angular/core';
import { Artiest } from '../../artiest/models/artiest.model';
import { ArtiestService } from '../../artiest/artiest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artiesten: Artiest[] = [];

  constructor(private _artiestService: ArtiestService) { }

  ngOnInit() {
    this._artiestService.getArtiesten().subscribe(res => {
      this.artiesten = res;

      var m = this.artiesten.length, t, i;
  
      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = this.artiesten[m];
        this.artiesten[m] = this.artiesten[i];
        this.artiesten[i] = t;
      }
    });
  }

}
