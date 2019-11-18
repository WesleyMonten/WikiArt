import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/genre/models/genre.model';
import { FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { GenreService } from 'src/app/genre/genre.service';

@Component({
  selector: 'app-toevoegen-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestToevoegenComponent implements OnInit {

  imageUrl: string = "../../../assets/artiest.png";

  genres: Genre[];
  firstGenre = false;
  Genres: FormArray;

  artiestForm = this.fb.group({
    naam: ['', Validators.required],
    biografie: ['', Validators.required],
    nationaliteit: ['', Validators.required],
    jaren: ['', Validators.required],
    aantalSchilderijen: [''],
    imageUrl: ['', Validators.required],
  });

  genreForm = this.fb.group({
    Genres: this.fb.array([this.initArray(), this.initArray(), this.initArray()])
  });

  constructor(public fb: FormBuilder, private _artiestService: ArtiestService, private _genreService: GenreService) { }

  onChangeImage(url) {
    this.imageUrl = url;
  }

  initArray(): FormGroup {

    return this.fb.group({
      Genre: ['', Validators.required]
    });

  }

  submitGenres(genres: FormArray) {


    console.warn(genres);
  }

  onSubmitArtiest() {
    this.Genres = this.genreForm.get('Genres') as FormArray;
    this._artiestService.addArtiest(this.artiestForm.value).subscribe(resArtiest => {
      this.Genres.value.forEach(genre => {
        if (genre.Genre != "") {
          this._genreService.addArtiestGenre(genre.Genre, resArtiest.artiestID).subscribe(resGenre => {
            this.artiestForm.reset();
            this.genreForm.reset();
          },
            (error: any) => {
              console.error(error);
            });
        }
      });
    },
      (error: any) => {
        console.error(error);
      })
  }

  ngOnInit() {
    this._genreService.getGenres().subscribe(res => {
      this.genres = res;
    },
      (error: any) => {
        console.error(error);
      })

  }
}
