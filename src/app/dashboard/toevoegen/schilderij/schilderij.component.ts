import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { Artiest } from 'src/app/artiest/models/artiest.model';
import { SchilderijService } from 'src/app/schilderij/schilderij.service';

@Component({
  selector: 'app-toevoegen-schilderij',
  templateUrl: './schilderij.component.html',
  styleUrls: ['./schilderij.component.css']
})
export class SchilderijToevoegenComponent implements OnInit {

  artiesten: Artiest[];
  imageUrl: string = "../../../assets/schilderij.png";

  schilderijForm = this.fb.group({
    naam: ['', Validators.required],
    artiestID: [''],
    imageUrl: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _artiestService: ArtiestService, private _schilderijService: SchilderijService) { }

  onChangeImage(url) {
    this.imageUrl = url;
  }

  onSubmitSchilderij() {
    this._schilderijService.addSchilderij(this.schilderijForm.value).subscribe(res => {
      console.log(res);
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
