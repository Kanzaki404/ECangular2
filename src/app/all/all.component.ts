import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  articles:object []= []
  constructor(private data:DataService, private router: Router) { }

  ngOnInit(): void {
    this.articles = this.data.getAllArticles()
  }

  onClick(id:string){
    this.router.navigate(['/all',id])
  }
}
