import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-article',
  templateUrl: './remove-article.component.html',
  styleUrls: ['./remove-article.component.css']
})
export class RemoveArticleComponent implements OnInit {
  articles = ['bismark1','bismark2','bismark23','bismark4','bismark5']
  constructor() { }

  ngOnInit(): void {
  }

}
