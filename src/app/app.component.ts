import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
title = 'app age calculate';
Age: any;
birthDate = false;
value: any = 0

onKey(e:any) {
  return this.value = e.target.value;
}

calculateAge() {
  this.birthDate = !this.birthDate;
  return this.Age = 2021 - this.value;
}

}