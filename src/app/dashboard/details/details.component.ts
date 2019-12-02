import { Component, OnInit } from '@angular/core';
import { ArtiestService } from '../../artiest/artiest.service';
import { Artiest } from '../../artiest/models/artiest.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  artiest: Artiest;
  id: number
  private sub: any;
  verwijderd: boolean = false;

  constructor(private _artiestService: ArtiestService, private route: ActivatedRoute) { }

  getArtiest(artiestID: number) {
    this._artiestService.getArtiest(artiestID).subscribe(res => {
      this.artiest = res;
    });
  }

  verwijderArtiest(artiestID: number) {
    this._artiestService.verwijderArtiest(artiestID).subscribe(() => {
      this.verwijderd = true
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getArtiest(this.id);
    });
  }
}
