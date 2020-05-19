import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular';

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  isVisible = false;

  dogs = new Array<Dog>();
  isHidden = true;

  constructor() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Łatka', 6), new Dog('2Pac', 9), new Dog('Alex', 3));
  }

  show(){
    this.isVisible = !this.isVisible;
  }

  hide(){
    this.isHidden = !this.isHidden;
  }
}

class Dog{
  constructor(public name: string, public age: number){
  }
}