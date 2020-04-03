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
    createArticle(article:any){
        
        
        if(localStorage.getItem('last') === null){
            article.id = this.key
            localStorage.setItem(this.key.toString(),JSON.stringify(article))
            localStorage.setItem('last', this.key.toString())

        }else{
            this.key = parseInt(localStorage.getItem('last')); 
            this.key++
            article.id = this.key
            localStorage.setItem(this.key.toString(),JSON.stringify(article))  
            localStorage.setItem('last', this.key.toString())
        }
       
    }

    getAllArticles(){
        this.clearArr()

        let num = parseInt(localStorage.getItem('last'));
        for(let i=0; i<num+1; i++){
            this.articles.push(JSON.parse(localStorage.getItem(i.toString())))
        }
        return this.articles
    }

    getLastArticle(){
        console.log('getLastArticle fired')
        let latest = localStorage.getItem('last')
        const data = JSON.parse(localStorage.getItem(latest))
        console.log(data)
        return data
    }

    getLastFive(){
        console.log('getLastFive called')
        this.clearArr();
        let lastIndex = parseInt(localStorage.getItem('last'))
        this.getAllArticles();
        if(lastIndex >= 5){
            let take = lastIndex -5;
            this.articles.splice(0,take+1)
            return this.articles
        }else if(lastIndex <= 4){
            return this.articles
        }
    }
    
    getArticle(id:string){
        const data = JSON.parse(localStorage.getItem(id))
        return data
    }


    remove(newArr:any){
        this.clearArr();
        this.articles = [...newArr];
        localStorage.clear()  //clear the storage and add the new articles except the on removed. This is done to keep the key of local storage in order
        for(let i = 0; i<this.articles.length; i++){
            let key:string = i.toString();
            let art:string = JSON.stringify(this.articles[i]);
            localStorage.setItem(key,art);
            let toStr = this.articles.length -1;
            localStorage.setItem('last', toStr.toString())
        }
    }

    
    clearArr(){
        while(this.articles.length > 0) {
            this.articles.pop();
          }

    }
}