import { Component, OnInit } from '@angular/core';
import { ArtiestService } from '../../artiest/artiest.service';
import { Artiest } from '../../artiest/models/artiest.model';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, Form, FormGroup, FormArray } from '@angular/forms';
import { Genre } from 'src/app/genre/models/genre.model';
import { GenreService } from 'src/app/genre/genre.service';
import { BehaviorSubject } from 'rxjs';
import {Schilderij} from '../../schilderij/models/schilderij.model';
import {SchilderijService} from '../../schilderij/schilderij.service';

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
  aanpassen: boolean = false;
  artiestForm: FormGroup;
  imageUrl: string;
  schilderijen: Schilderij[];
  genres: Genre[];
  genresArtiest: Genre[];
  Genres: FormArray;
  refresh = new BehaviorSubject(false);

  genreForm = this.fb.group({
    Genres: this.fb.array([this.initArray(), this.initArray(), this.initArray()])
  });


  constructor(private _artiestService: ArtiestService, private route: ActivatedRoute, private fb: FormBuilder, private _genreService: GenreService, private _schilderijService: SchilderijService) {
    this.refresh.subscribe(() => {
      this.ngOnInit();
    });
  }

  getSchilderijen(artiestID: number){
    this._schilderijService.getSchilderijByArtiest(artiestID).subscribe(res => {
      this.schilderijen = res;
    });
  }

  getArtiest(artiestID: number) {
    this._artiestService.getArtiest(artiestID).subscribe(res => {
      this.artiest = res;

      this.artiestForm = this.fb.group({
        naam: [res.naam],
        biografie: [res.biografie],
        nationaliteit: [res.nationaliteit],
        jaren: [res.jaren],
        aantalSchilderijen: [res.aantalSchilderijen],
        imageUrl: [res.imageUrl],
      });

      this.imageUrl = res.imageUrl;
    });
  }

  verwijderArtiest(artiestID: number) {
    this._artiestService.verwijderArtiest(artiestID).subscribe(() => {
      this.verwijderd = true;
    });
  }

  pasArtiestAan() {
    if (this.aanpassen) {
      this.aanpassen = false;
    } else {
      this.aanpassen = true;
    }
  }

  initArray(): FormGroup {
    return this.fb.group({
      Genre: ['']
    });
  }

  onSubmitArtiest() {
    this.artiestForm.get('imageUrl').setValue(this.imageUrl);
    this.Genres = this.genreForm.get('Genres') as FormArray;
    this._artiestService.editArtiest(this.artiestForm.value, this.id).subscribe(resArtiest => {
      this.Genres.value.forEach(genre => {
        if (genre.Genre != "") {
          this._genreService.editArtiestGenre(genre.Genre, resArtiest.artiestID).subscribe(() => {
            this.artiestForm.reset();
            this.genreForm.reset();
          },
            (error: any) => {
              console.error(error);
            });
        }
      });
      this.refresh.next(true);
    },
      (error: any) => {
        console.error(error);
      })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getArtiest(this.id);
    });

    this._genreService.getGenres().subscribe(res => {
      this.genres = res;
    });
  }
}
