import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/genre/genre.service';
import { Genre } from 'src/app/genre/models/genre.model';
import { Artiest } from 'src/app/artiest/models/artiest.model';
import { ArtiestService } from 'src/app/artiest/artiest.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];
  artiesten: Artiest[];

  constructor(private _genreService: GenreService, private _artiestService: ArtiestService) { }

  filter(genreId: string) {
    this._artiestService.filterOpGenre(genreId).subscribe(res => {
      this.artiesten = res;
    })
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
