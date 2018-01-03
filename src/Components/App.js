import React, { Component } from 'react'
import { PageHeader } from 'react-bootstrap'
import Searcher from './Searcher.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PageHeader>Book by ISBN <small>Search book information by ISBN code.</small></PageHeader>
        <Searcher />
      </div>
    )
  }
}

export default App
