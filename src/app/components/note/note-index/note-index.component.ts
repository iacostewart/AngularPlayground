import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { Note } from '../../../models/Note';
import {MatTableDataSource} from '@angular/material';


import { MatToolbarModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatTableModule} from '@angular/material'


@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.css']
})
export class NoteIndexComponent implements OnInit {

columnNames = ['details', 'NoteId', 'Title', 'Content', 'IsStarred', 'CreatedUtc', 'buttons'];

  constructor(private _noteService: NotesService) { }

  dataSource: MatTableDataSource<Note>

  ngOnInit() {
    this._noteService.getNotes().subscribe((notes: Note[]) => {
      this.dataSource = new MatTableDataSource<Note>(notes);
    });
  }

}
