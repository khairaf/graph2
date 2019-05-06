import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  displayBook(){
    var data = this.props.data;
    if(data.loading){
      return( <div>Loading book...</div>);
    } else {
      return data.books.map(book => {
        return (<li key={ book.id }>{ book.name }</li>);
      })
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id="main">
        <ul id="book-list">
          { this.displayBook() }
        </ul>
        <BookDetails />
      </div>
    );
  } 
}

export default graphql(getBooksQuery)(BookList);
