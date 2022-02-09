import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unitario';
  active: boolean=true;
  sum(x:number, y:number):number{
    return x+y;
  }
}
