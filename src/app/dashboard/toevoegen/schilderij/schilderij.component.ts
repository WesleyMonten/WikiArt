import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { Artiest } from 'src/app/artiest/models/artiest.model';
import { SchilderijService } from 'src/app/schilderij/schilderij.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen-schilderij',
  templateUrl: './schilderij.component.html',
  styleUrls: ['./schilderij.component.css']
})
export class SchilderijToevoegenComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  url: string;

  artiesten: Artiest[];
  imageUrl: string = "../../../assets/schilderij.png";

  schilderijForm = this.fb.group({
    naam: ['', Validators.required],
    artiestID: [''],
    imageUrl: ['']
  });

  constructor(private fb: FormBuilder, private _artiestService: ArtiestService, private _schilderijService: SchilderijService, private afStorage: AngularFireStorage, private router: Router) { }

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

  onSubmitSchilderij() {
    this.schilderijForm.get('imageUrl').setValue(this.imageUrl);
    this._schilderijService.addSchilderij(this.schilderijForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/toevoegen']);
      this.schilderijForm.reset();
    },
      (error: any) => {
        console.error(error);
      });
  }

  ngOnInit() {
    this._artiestService.getArtiesten().subscribe(res => {
      this.artiesten = res;
    })

  }

}
