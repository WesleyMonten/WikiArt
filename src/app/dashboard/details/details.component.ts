import { Component, OnInit } from '@angular/core';
import {ArtiestService} from '../../artiest/artiest.service';
import {Artiest} from '../../artiest/models/artiest.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private artiest: any;

  constructor(private _artiestService: ArtiestService) { }

  ngOnInit() {
  }

  getArtiest(artiestID: string) {
    this._artiestService.getArtiest(artiestID).subscribe(res => {
      this.artiest = res;
    });
  }
}
