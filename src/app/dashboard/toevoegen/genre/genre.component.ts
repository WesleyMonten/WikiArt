import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ArtiestService } from 'src/app/artiest/artiest.service';
import { GenreService } from 'src/app/genre/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toevoegen-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreToevoegenComponent implements OnInit {

  displayedColumns: string[] = ['Select', 'Artiest'];
  dataSource: MatTableDataSource<any>
  resultsLength: number = 0;
  selection = new SelectionModel<any>(true, []);
  artiestIds: number[] = [];

  genreForm = this.fb.group({
    naam: ['', Validators.required],
    artiestIds: ['']
  });

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private _artiestService: ArtiestService, private _genreService: GenreService, private router: Router) { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onSubmitGenre() {
    this.artiestIds = [];
    this.selection.selected.forEach(e => {
      this.artiestIds.push(e.artiestID);
    });
    this.genreForm.get('artiestIds').setValue(this.artiestIds);
    this._genreService.addGenre(this.genreForm.value).subscribe(res => {
      this.router.navigate(['/toevoegen']);
      this.genreForm.reset();
      this.selection = new SelectionModel<any>(true, []);

    },
      (error: any) => {
        console.error(error);
      });
  }

  ngOnInit() {
    this._artiestService.getArtiesten().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.resultsLength = res.length;
      setTimeout(() => this.dataSource.paginator = this.paginator);
    })
  }

}
