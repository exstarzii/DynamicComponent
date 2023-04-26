import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-comp2',
  templateUrl: './my-comp2.component.html',
  styleUrls: ['./my-comp2.component.css']
})
export class MyCompComponent2 {
  @Input()
  text = ''; // <-- name Angular and Builder inputs the same
}
