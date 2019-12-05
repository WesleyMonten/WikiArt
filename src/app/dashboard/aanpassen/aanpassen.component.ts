import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'src/app/genre/genre.service';
import { Genre } from 'src/app/genre/models/genre.model';
import { Artiest } from 'src/app/artiest/models/artiest.model';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-aanpassen',
  templateUrl: './aanpassen.component.html',
  styleUrls: ['./aanpassen.component.css']
})
export class AanpassenComponent implements OnInit {

  artiest: Artiest;
  id: number
  private sub: any;
  artiestForm: FormGroup;
  genreForm: FormGroup;
  imageUrl: string;
  genres: Genre[];
  genresArtiest: Genre[];
  Genres: FormArray;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: string;

  constructor(private _artiestService: ArtiestService, private route: ActivatedRoute, private fb: FormBuilder, private _genreService: GenreService, private router: Router, private afStorage: AngularFireStorage) { }

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

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.imageUrl = url;
        });
      })
    ).subscribe();
  }

  initArray(index: number): FormGroup {
    if (this.genresArtiest[index] && this.genresArtiest[index].artiestIds.length != 0) {
      return this.fb.group({
        Genre: [this.genresArtiest[index].id]
      });
    } else {
      return this.fb.group({
        Genre: ['']
      });
    }

  }

  onSubmitArtiest() {
    this.artiestForm.get('imageUrl').setValue(this.imageUrl);
    this.Genres = this.genreForm.get('Genres') as FormArray;
    this._artiestService.editArtiest(this.artiestForm.value, this.id).subscribe(() => {
      this._genreService.verwijderArtiestBijGenres(this.artiest.artiestID).subscribe(() => {
        this.Genres.value.forEach(genre => {
          if (genre.Genre != "") {
            this._genreService.addArtiestGenre(genre.Genre, this.artiest.artiestID).subscribe(() => {
              this.artiestForm.reset();
              this.genreForm.reset();
            },
              (error: any) => {
                console.error(error);
              });
          }
        });
        this._artiestService.refresh.next(true);
        this.router.navigate(['/details/' + this.artiest.artiestID]);
      },
        (error: any) => {
          console.error(error);
        })
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
    })

    this._genreService.getGenresVanArtiest(this.id).subscribe(res => {
      this.genresArtiest = res;
      this.genreForm = this.fb.group({
        Genres: this.fb.array([this.initArray(0), this.initArray(1), this.initArray(2)])
      });
      console.log(res);
    })

  }
}

