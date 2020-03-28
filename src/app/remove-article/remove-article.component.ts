import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-remove-article',
  templateUrl: './remove-article.component.html',
  styleUrls: ['./remove-article.component.css']
})
export class RemoveArticleComponent implements OnInit {
  articles:object[] = [];
  constructor(private data:DataService) {}

  ngOnInit(): void {
  }

  getArticles(){

    if(this.articles.length === 0 && this.articles.length < this.data.getAllArticles().length ){
      this.articles = this.data.getAllArticles()
    }else{
      alert('nothing to fetch')
    }
    
  }


}
