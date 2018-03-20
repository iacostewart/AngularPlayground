import { Component, OnInit } from '@angular/core';
import { Note,  } from '../../models/Note';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-slidertest',
  templateUrl: './slidertest.component.html',
  styleUrls: ['./slidertest.component.css']

 
})





export class SlidertestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
