import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Searcher from './Searcher.js'
import BookInfo from './BookInfo.js'

class App extends Component {
  state = { book: null }
  handleSubmit = (book) => {
    this.setState({ book: book });
  }
  render () {
    return (
      <div className='App'>
        <PageHeader>Book by ISBN <small>Search book information by an ISBN code.</small></PageHeader>
        <Searcher onSubmit={this.handleSubmit} />
        <BookInfo book={this.state.book} />
      </div>
    )
  }
}

export default App
