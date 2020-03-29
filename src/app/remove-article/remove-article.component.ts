import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-remove-article',
  templateUrl: './remove-article.component.html',
  styleUrls: ['./remove-article.component.css']
})
export class RemoveArticleComponent implements OnInit {
  disable:boolean =false;
  articles:Array<any> = [];
  emptyArr:boolean = false;
  constructor(private data:DataService) {}

  ngOnInit(): void {
  }

  getArticles(){
      this.disable = true;
      let returned:object [] = [...this.data.getAllArticles()];
      if(returned.length === 0){
        this.emptyArr = true;
      }else{
        for(let i = 0; i<returned.length;i++){
        this.articles[i] = returned[i];
      } 
    }
  }

  del(item:string){
    let index = this.articles.findIndex(x => x.title ===item);
    this.articles.splice(index,1)
    this.data.remove(this.articles)
  }
}
