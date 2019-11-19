import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { Genre } from 'src/app/genre/models/genre.model';
import { GenreService } from 'src/app/genre/genre.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {

  constructor(private router: Router) { }

  navigateArtiest() {
    this.router.navigate(['/artiest-toevoegen'])
  }

  navigateGenre() {
    this.router.navigate(['/genre-toevoegen'])
  }

  navigateSchilderij() {
    this.router.navigate(['/schilderij-toevoegen'])
  }

  ngOnInit() { }

}
