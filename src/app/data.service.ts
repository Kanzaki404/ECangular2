export class DataService{
    articles:object[] = [];
    
    // createArticle(article:object){
    //     console.log(this.articles.length)
    //     this.articles.push(article)
    //     for(let i = 0; i<this.articles.length; i++){
    //         let key:string = i.toString();
    //         let art:string = JSON.stringify(this.articles[i]);
    //         localStorage.setItem(key,art);
    //         let toStr = this.articles.length -1;
    //         localStorage.setItem('last', toStr.toString())
    //     }
    // }
    key:number = 0;
    createArticle(article:object){
        
        
        if(localStorage.getItem('last') === null){

            localStorage.setItem(this.key.toString(),JSON.stringify(article))
            localStorage.setItem('last', this.key.toString())

        }else{
            this.key = parseInt(localStorage.getItem('last')); 
            this.key++
            localStorage.setItem(this.key.toString(),JSON.stringify(article))  
            localStorage.setItem('last', this.key.toString())
        }
       
    }

    getAllArticles(){
        let num = parseInt(localStorage.getItem('last'));
        for(let i=0; i<num; i++){
            this.articles.push(JSON.parse(localStorage.getItem(i.toString())))
        }
        return this.articles
    }

    getLastArticle(){
        let key = localStorage.getItem('last')
        console.log(localStorage.getItem(key))
    }
}