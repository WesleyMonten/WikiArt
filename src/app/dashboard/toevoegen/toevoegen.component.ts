import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {

  imageUrl: string = "../../../assets/artiest.png";

  artiestForm = this.fb.group({
    naam: ['', Validators.required],
    biografie: ['', Validators.required],
    nationaliteit: ['', Validators.required],
    jaren: ['', Validators.required],
    aantalSchilderijen: [''],
    imageUrl: ['', Validators.required]
  });

  constructor(public fb: FormBuilder, private _artiestService: ArtiestService) { }

  onChangeImage(url) {
    this.imageUrl = url;
  }

  onSubmitArtiest() {
    this._artiestService.addArtiest(this.artiestForm.value).subscribe(res => {
      console.warn(res);
    },
    (error: any) => {
      console.error(error);
    })
  }

  ngOnInit() {
  }

    


}
