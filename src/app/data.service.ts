export class DataService{
    articles:object[] = [{      
         title:'',
        author:'',
        content:'',
        timeToRead: 0}
    
    ];

    createArticle(article:object){
        this.articles.push(article)

        console.log(this.articles)
    }
}