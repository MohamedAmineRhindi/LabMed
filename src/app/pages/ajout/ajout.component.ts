import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import data from '../../data';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  isPatientActive: boolean = false
  isInfirmierActive: boolean = false
  isDeplacementActive: boolean = true
  patients = data.patients
  infirmiers = data.infirmiers
  constructor(
  ) { }

  setPatient() {
    this.isPatientActive = true
    this.isDeplacementActive = false
    this.isInfirmierActive = false
  }

  setInfirmier() {
    this.isPatientActive = false
    this.isDeplacementActive = false
    this.isInfirmierActive = true
  }

  setDeplacement() {
    this.isPatientActive = false
    this.isDeplacementActive = true
    this.isInfirmierActive = false
  }

  onSubmit(f: NgForm) {

    if (this.isPatientActive) {
      const { nom, prenom, date, adresse, numSecu } = f.value
      const options = {
        method: 'POST',
        body: JSON.stringify({ nom, prenom, date, adresse, numSecu }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch("http://localhost:8080/patients", options)
        .then(res => res.json())
        .then(res => console.log(res));
    }

    if (this.isInfirmierActive) {
      const { nom, prenom, numPro, numMobile, numFixe } = f.value
      const options = {
        method: 'POST',
        body: JSON.stringify({ nom, prenom, numPro, numMobile, numFixe }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch("http://localhost:8080/infirmiers", options)
        .then(res => res.json())
        .then(res => console.log(res));
    }

    if (this.isDeplacementActive) {
      const { date, cout, patient, infirmier } = f.value
      const options = {
        method: 'POST',
        body: JSON.stringify({ date, cout, patient, infirmier }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch("http://localhost:8080/deplacements", options)
        .then(res => res.json())
        .then(res => console.log(res));
    }
  }

  ngOnInit(): void {
    fetch("http://localhost:8080/patients")
      .then(response => response.json())
      .then(data => {
        this.patients = data
      })
    fetch("http://localhost:8080/infirmiers")
      .then(response => response.json())
      .then(data => {
        this.infirmiers = data
      })
  }

}
