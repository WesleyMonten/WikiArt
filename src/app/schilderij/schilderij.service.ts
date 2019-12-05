import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schilderij } from './models/schilderij.model';
import { Artiest } from '../artiest/models/artiest.model';

@Injectable()
export class SchilderijService {

  constructor(private http: HttpClient) { }

  addSchilderij(schilderij: Schilderij) {
    return this.http.post<Schilderij>('http://localhost:8762/api/schilderijen/schilderij', JSON.stringify(schilderij), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

  getSchilderijByArtiest(artiestID: number) {
    return this.http.get<Schilderij[]>('http://localhost:8762/api/schilderijen/schilderijen/' + artiestID);
  }

  verwijderSchilderij(schilderijID: number) {
    return this.http.delete<Artiest>("http://localhost:8762/api/schilderijen/schilderij/" + schilderijID);
  }

}
