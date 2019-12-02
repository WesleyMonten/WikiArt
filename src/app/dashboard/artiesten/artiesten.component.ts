import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/genre/models/genre.model';
import { Artiest } from 'src/app/artiest/models/artiest.model';
import { GenreService } from 'src/app/genre/genre.service';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-artiesten',
  templateUrl: './artiesten.component.html',
  styleUrls: ['./artiesten.component.css']
})
export class ArtiestenComponent implements OnInit {

  genres: Genre[];
  artiesten: Artiest[] = [];

  filterForm = this.fb.group({
    Filter: [''],
    Gebruikersnaam: ['']
  });

  constructor(private _genreService: GenreService, private _artiestService: ArtiestService, private fb: FormBuilder) {

  }

  filterOpGenre(genreId: string) {
    this._artiestService.filterOpGenre(genreId).subscribe(res => {
      this.artiesten = res;
    });
  }

  onChangeValue(value) {
    if (value != "") {
      this._artiestService.filterOpArtiestNaam(value).subscribe(res => {
        this.artiesten = res;
      })
    }
  }

  limitTekst(tekst: string) {
    var aangepasteTekst = tekst.slice(0, 800);
    aangepasteTekst += "...";
    return aangepasteTekst;
  }

  ngOnInit() {
    this._genreService.getGenres().subscribe(res => {
      this.genres = res;
    })
  }
}
