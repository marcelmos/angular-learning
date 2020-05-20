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
    // Dogs
    this.dogs.push(new Dog('Reksio', 4), new Dog('Łatka', 6), new Dog('2Pac', 9), new Dog('Alex', 3));
    // DATA BINDING
    // PT.1
    setTimeout( () => {
      this.isDisable = false;
    }, 3000);
  }

  show(){
    this.isVisible = !this.isVisible;
  }

  hide(){
    this.isHidden = !this.isHidden;
  }

  // DATA BINDING
  // PT.1
  inputText = 'Tekst';
  maxLengt = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;

  change(){
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  // PT.2
  insertText = '';
  colorForClass = "color3";
  isShutDown = true;

  onFocus(){
    this.colorForClass = 'color2';
  }

  onClick(event){
    console.log(event);
  }

  onMouseMove(event){
    console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }

  onPaste(){
    this.insertText = 'Nie wklejaj, wpisz!';
  }

  changeIt(){
    this.isShutDown = false;
  }

  // DATA BINDING - "Homework"
  job = 'programista';
  skill = 'Angular';

  inputJob(event){
    this.job = event.target.value;
  }

  inputSkill(event){
    this.skill = event.target.value;
  }

  // DATA BINDING - "Homework" with [(ngModel)] #### NALEŻY ZAINPORTOWAĆ TĄ DYREKTYWE ####
  name = "Alex";
  hobby = "pływanie"
}

class Dog{
  constructor(public name: string, public age: number){
  }
}
