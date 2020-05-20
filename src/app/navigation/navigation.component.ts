import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  iCan = ["Create new Angular project", "Create component", "Using *ngFor", "Edit component HTML", "Edit component CSS", "Data binding"];

  constructor() { }

  ngOnInit(): void {
  }

}
