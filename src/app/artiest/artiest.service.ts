import { Injectable } from '@angular/core';
import { Artiest } from './models/artiest.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArtiestService {

  constructor(private http: HttpClient) { }

  addArtiest(artiest: Artiest) {
    return this.http.post<Artiest>("http://localhost:8050/artiesten/artiest", JSON.stringify(artiest), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }
}
