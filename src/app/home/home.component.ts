import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article:any;
  empty:boolean;
  constructor(private data:DataService) { }

  ngOnInit(): void {

      this.article = this.data.getLastArticle();
  }
}
