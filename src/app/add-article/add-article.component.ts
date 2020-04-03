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
  author:string = '';
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  onPublish(title:string,content:string,author:string){
    if(author === ""){
      author = "Anonymous"
    }
    let article = {
      title:title,
      author:author,
      content:content,
      timeToRead: this.timeToReadCalc(this.contentInput),
      id:'0'
    }
    
    this.data.createArticle(article)
    this.titleInput= '';  //cleared in order to stop the browser from crying 'cannot read propery length of null'
    this.contentInput = '';
    this.author = '';
    alert('Article successfully published')
  }

  timeToReadCalc(input:string){// get the input text and calculate the number of words with counting spaces and retrn rounded number of average reading speed 200 wpm
    let words = input.split(' ').length
    if(words < 200){
      return 1
    }else{
      return Math.round(words/200)
    }
    
  }
}
