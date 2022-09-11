import { Component, OnInit } from '@angular/core'
import data from '../../data'

@Component({
  selector: 'app-deplacements',
  templateUrl: './deplacements.component.html',
  styleUrls: ['./deplacements.component.css']
})
export class DeplacementsComponent implements OnInit {
  deplacements = data.deplacements
  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:8080/deplacements")
      .then(response => response.json())
      .then(data => {
        this.deplacements = data
      })
  }

}
