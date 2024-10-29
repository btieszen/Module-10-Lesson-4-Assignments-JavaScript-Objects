console.log('Assignments: JavaScript Objects');

//task1

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
//gets book info
let book1 = new Book("Moby Dick","Herman Melville",720);
let book2 = new Book("The cat in the Hat","Dr Seuss",61);
let book3 = new Book("It",'Stephen King',1138);
//task2 display info
Book.prototype.updateTitle =  function(newTitle){
this.title= newTitle;
}

Book.prototype.updateAuthor =  function(newAuthor){
    this.author= newAuthor;
}

Book.prototype.updatePages =  function(newPages){
    this.pages= newPages;
    }
Book.prototype.displayBooks = function(){
    console.log(`\nTitle of Book:${this.title}, Author:${this.author},Number of pages:${this.pages}`)
}
//TASK 2 display all book
console.log(book3.displayBooks());

allBooks = [book1,book2,book3];
console.log("\nAdd Book:")
console.log("Updated List:")

//add book to original list
function addBook(allBooks){
 let book4 = new Book("The Old man and the Sea","Ernest Hemingway",128);
 let newBook =(allBooks.push(book4));
 return allBooks
 }
console.log(addBook(allBooks));

//filters book by author name 

bookList =[{title:"Moby Dick",author:"Herman Melville",pages:720},{title:"The cat in the Hat",author:"Dr Seuss",pages:61},{title:"It",author:'Stephen King',pages:1138},{title:"The Old man and the Sea",author:"Ernest Hemingway",pages:128}]
let authorName=("Herman Melville");
function searchBooksByAuthor(authorName) {
    return bookList.filter(book =>
        book.author.toLowerCase().includes(authorName.toLowerCase())
    );
}
console.log("\nSearch book by author:",searchBooksByAuthor(authorName))

//filters by greater that 100 pages
function filterByPages() {
    return bookList.filter(book => book.pages > 100);
}
console.log("Books with more that 100 pages:",filterByPages());






//PART 2

//Task1
console.log("\n Part 2");
function Account(accountNumber,balance,owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let account1 =new Account(987654321,10000,"John Doe");

Account.prototype.displayAccount = function(){
    console.log(`Account number: ${this.accountNumber}, Balance: ${this.balance}, Owner: ${this.owner}`);
    
    //task2

    let balance1 = this.balance;
    let deposit=100;
    console.log("\nDeposit Amount:", deposit);
    console.log("New Balance:",balance1 + deposit);
    let withdraw =this.balance
    let withdrawAmount = 500;
    console.log("\nWithdraw Amount:",withdrawAmount);
    console.log("New Balance:",withdraw - withdrawAmount);

    let amount=0,principle=(balance1),rate=10,time=3,ci;			
	amount=principle*((1+rate/100)*(1+rate/100)*(1+rate/100));
    console.log("\n9Task 3 Compund interest")
	console.log("principle= "+principle);
	console.log("rate="+rate);
	console.log("time="+time);
	console.log("amount="+amount);
 
	ci =amount-principle;
 
	console.log("compound interest="+ci);
 
}

console.log("Account Information:");
account1.displayAccount();





