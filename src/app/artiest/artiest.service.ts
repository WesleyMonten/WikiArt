import { Injectable } from '@angular/core';
import { Artiest } from './models/artiest.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ArtiestService {

  refresh = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  getArtiesten(): Observable<any> {
    return this.http.get<Artiest[]>("http://localhost:8762/api/artiesten/artiesten");
  }

  addArtiest(artiest: Artiest) {
    return this.http.post<Artiest>("http://localhost:8762/api/artiesten/artiest", JSON.stringify(artiest), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }

  filterOpGenre(genreId: string) {
    return this.http.get<Artiest[]>("http://localhost:8762/api/artiesten/filteropgenre/" + genreId);
  }

  getArtiest(artiestID: number) {
    return this.http.get<Artiest>("http://localhost:8762/api/artiesten/artiest/" + artiestID);
  }

  filterOpArtiestNaam(value: string) {
    return this.http.get<Artiest[]>("http://localhost:8762/api/artiesten/filteropnaam/" + value);
  }

  verwijderArtiest(artiestID: number) {
    return this.http.delete<Artiest>("http://localhost:8762/api/artiesten/artiest/" + artiestID);
  }

  editArtiest(artiest: Artiest, artiestID: number) {
    return this.http.put<Artiest>("http://localhost:8762/api/artiesten/artiest/" + artiestID, JSON.stringify(artiest), {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    });
  }
}
