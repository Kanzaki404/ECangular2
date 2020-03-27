import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  titleInput:string = '';
  contentInput:string = '';

  article = {
    title:'',
    author:'',
    content:'',
    timeToRead: 0

}
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  onPublish(title:string,content:string,author:string){
    ;
    this.article.title = title;
    this.article.content = content;
    if(author === ""){
      this.article.author = "Anonymous"
    }else{
      this.article.author = author;
    }

    this.article.timeToRead = this.timeToReadCalc(this.contentInput.length)
    
    this.data.createArticle(this.article)
  }

  timeToReadCalc(input:number){
    let words = this.contentInput.split(' ').length
    if(input < 200){
      return 1
    }else{
      return Math.round(words/200)
    }
    
  }
}
