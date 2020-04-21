import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  
  articles:object []= []
  constructor(private data:DataService, private router: Router) { }

  ngOnInit(): void {
    let temp:Array<any> = this.data.getLastFive()
    temp.forEach(item =>{
      if(item.content.length > 800){
        item.content = item.content.substring(0, 300) + ' ...'
      }
    })
    this.articles = temp
  }

  onClick(id:string){
    if(id !== undefined){
      this.router.navigate(['/recent',id])
    }

  }  
}
