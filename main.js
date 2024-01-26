function Book(title, author, pages, read){
    this.title = "title";
    this.author = "author";
    this.pages = "pages";
    this.read = "isRead";

    this.info = function(){
        const status = this.isRead? "read": "not read yet";
        `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
    }

}