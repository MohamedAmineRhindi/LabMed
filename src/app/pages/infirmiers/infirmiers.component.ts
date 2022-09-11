import { Component, OnInit } from '@angular/core'
import data from '../../data'

@Component({
  selector: 'app-infirmiers',
  templateUrl: './infirmiers.component.html',
  styleUrls: ['./infirmiers.component.css']
})
export class InfirmiersComponent implements OnInit {
  infirmiers = data.infirmiers
  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:8080/infirmiers")
      .then(response => response.json())
      .then(data => {
        this.infirmiers = data
      })
  }

}
