import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from './models/genre.model';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>("http://localhost:8762/api/genres/genres");
  }

  addArtiestGenre(genreId: string, artiestID: number) {
    return this.http.put<Genre>("http://localhost:8762/api/genres/genre/" + genreId, JSON.stringify(artiestID), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

  addGenre(genre: Genre) {
    return this.http.post<Genre>("http://localhost:8762/api/genres/genre", JSON.stringify(genre), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

  editArtiestGenre(genreId: string, artiestID: number) {
    return this.http.put<Genre>("http://localhost:8762/api/genres/replace/" + genreId, JSON.stringify(artiestID), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

}
