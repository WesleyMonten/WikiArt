import { Component, OnInit } from '@angular/core';
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
