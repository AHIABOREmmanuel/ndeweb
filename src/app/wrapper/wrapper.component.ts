import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  host: {ngSkipHydration : 'false'},
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

}
