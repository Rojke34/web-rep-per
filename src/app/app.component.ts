import { Component, OnInit } from '@angular/core';
import jsonData  from  '../assets/project.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  condition = false
  projects = [];

  constructor(){}

  ngOnInit(){

    this.projects = jsonData;

  }

  onClickMe() {
    this.condition = !this.condition
  }

  closeNav() {
    this.condition = false
  }

}
