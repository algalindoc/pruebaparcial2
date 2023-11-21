//GetDetail para obtener el detalle de una serie
import { Component, Input, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serieId!: number;
  @Input() serieDetail!: Serie;

  constructor(public serie: SerieService) { }

  getDetail() {
    this.serie.getSerie(this.serieId).subscribe(serie => this.serieDetail = serie);
  }

  ngOnInit() {
  }

}
