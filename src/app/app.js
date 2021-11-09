/**
 * @copyright Palace Resorts
 * @author Oscar Eduardo Raygoza <omiramontes@palaceresorts.com>
 * @version v0.1.0
 * @description app.js
 * @creationDate 02/November/2021
 */

class BookWithReviews {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.reviews = [];
  }

  addReview(author, content) {
    this.reviews.push({ author, content });
  };
}


export function parseBooksData(books, reviews) {
  var list = [];

  if(reviews.length > 0 ){
    books.map((book) => {
      var bookReviews = new BookWithReviews(book.id, book.title);
      var listReviews = reviews.filter(review => review.bookId === book.id);
      if(listReviews[0] !== undefined){
        listReviews.forEach(review => {
          bookReviews.addReview(review.author, review.content);
        });
      }
      list.push(bookReviews)
    });
  }
  return list;
}

export function displayBooks(parentNode, books) {
  if(books.length > 0){
    let nodeOl = document.createElement("OL");
    books.forEach(book => {
      let nodeLi = document.createElement("LI");
      let nodeSpan = document.createElement("SPAN");
      let textNode = document.createTextNode(book.title); 
      nodeSpan.appendChild(textNode);
      nodeLi.appendChild(nodeSpan);

      if(book.reviews.length != 0){
        let nodeUl = document.createElement("UL");
        book.reviews.forEach(review => {
          let liReview = document.createElement("LI");
          let textReview = document.createTextNode(review.content + " by " + review.author);
          liReview.appendChild(textReview);
          nodeUl.appendChild(liReview);
        });     
        nodeLi.appendChild(nodeUl);
      }
      nodeOl.appendChild(nodeLi);
    });
    parentNode.appendChild(nodeOl);
  } 
}
