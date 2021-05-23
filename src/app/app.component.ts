import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;

  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = "Ordinateur";
  
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 3000)
  }

  onAllumer() {
    console.log('ON ALLUME TOUT');
  }
}
