import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/genre/models/genre.model';
import { FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { GenreService } from 'src/app/genre/genre.service';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-toevoegen-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestToevoegenComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: string;

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

  constructor(public fb: FormBuilder, private _artiestService: ArtiestService, private _genreService: GenreService, private afStorage: AngularFireStorage) { }

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

  initArray(): FormGroup {
    return this.fb.group({
      Genre: ['', Validators.required]
    });
  }

  onSubmitArtiest() {
    this.artiestForm.get('imageUrl').setValue(this.imageUrl);
    this.Genres = this.genreForm.get('Genres') as FormArray;
    this._artiestService.addArtiest(this.artiestForm.value).subscribe(resArtiest => {
      this.Genres.value.forEach(genre => {
        if (genre.Genre != "") {
          this._genreService.addArtiestGenre(genre.Genre, resArtiest.artiestID).subscribe(() => {
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
