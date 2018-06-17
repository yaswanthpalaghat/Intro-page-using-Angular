import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstname:'string';
  lastname='palaghat';
  status='boolean'
}
displayuserstatus() {
  this.status=true;
}
greetPerson() {
  console.log('yaswanth here');
}