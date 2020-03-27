import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  loggedIn:boolean = false;
  title = 'bolg2';
  constructor(private data:DataService){}
  onLogIn(){
    this.loggedIn = true;
    
  }
}
