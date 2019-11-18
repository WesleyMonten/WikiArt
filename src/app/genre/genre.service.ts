import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from './models/genre.model';
import { Artiest } from '../artiest/models/artiest.model';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>("http://localhost:8050/genres/genres");
  }

  addArtiestGenre(genreId: string, artiestID: number) {
    return this.http.put<Genre>("http://localhost:8050/genres/genre/" + genreId, JSON.stringify(artiestID), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }
}
