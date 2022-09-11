import { Component, OnInit } from '@angular/core'
import data from '../../data'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients = data.patients
  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:8080/patients")
      .then(response => response.json())
      .then(data => {
        this.patients = data
      })
  }

}
