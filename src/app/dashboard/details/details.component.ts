import { Component, OnInit } from '@angular/core';
import { ArtiestService } from '../../artiest/artiest.service';
import { Artiest } from '../../artiest/models/artiest.model';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, Form, FormGroup, FormArray } from '@angular/forms';
import { Genre } from 'src/app/genre/models/genre.model';
import { GenreService } from 'src/app/genre/genre.service';
import { BehaviorSubject } from 'rxjs';
import { Schilderij } from '../../schilderij/models/schilderij.model';
import { SchilderijService } from '../../schilderij/schilderij.service';

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
  imageUrl: string;
  schilderijen: Schilderij[];
  genres: Genre[];
  genresArtiest: Genre[];


  constructor(private _artiestService: ArtiestService, private route: ActivatedRoute, private fb: FormBuilder, private _genreService: GenreService, private _schilderijService: SchilderijService) {
    this._artiestService.refresh.subscribe(() => {
      this.ngOnInit();
    });
  }

  getSchilderijen(artiestID: number) {
    this._schilderijService.getSchilderijByArtiest(artiestID).subscribe(res => {
      this.schilderijen = res;
    });
  }

  getArtiest(artiestID: number) {
    this._artiestService.getArtiest(artiestID).subscribe(res => {
      this.artiest = res;

      this.imageUrl = res.imageUrl;
    });
  }

  verwijderArtiest(artiestID: number) {
    this._artiestService.verwijderArtiest(artiestID).subscribe(() => {
      this.verwijderd = true;
    });
  }

  verwijderSchilderij(schilderijID: number) {
    this._schilderijService.verwijderSchilderij(schilderijID).subscribe(() => {
      console.log(true);
      this.getSchilderijen(this.artiest.artiestID);
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getArtiest(this.id);
      this.getSchilderijen(this.id);
    });

    this._genreService.getGenresVanArtiest(this.id).subscribe(res => {
      this.genresArtiest = res;
    })
  }
}
