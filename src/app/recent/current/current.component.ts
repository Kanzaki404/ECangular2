import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  article:any
  constructor(private route: ActivatedRoute, private data:DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.article= this.data.getArticle(id)
    
  }

}
