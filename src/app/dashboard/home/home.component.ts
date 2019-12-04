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
      this.artiesten.sort(() => Math.random() - 0.5);
    });
  }

}
