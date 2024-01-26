function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        const status = this.read ? "read" : "not read yet";
       return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
    }

}

const theHobbit = new Book("The Hobbit", "Armel", 295, false)
console.log(theHobbit.info());

const theHobbit1 = new Book("The Hobbit1", "Daniel", 300, true)
console.log(theHobbit1.info());

const theHobbit2 = new Book("The Hobbit2", "J.R.R. Tolkien", 295, false)
console.log(theHobbit2.info());
console.log(theHobbit2.author)