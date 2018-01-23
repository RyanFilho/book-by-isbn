import React, { Component } from 'react'
import Searcher from './Searcher.js'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  state = { book: {} }
  handleSubmit  = (book) => {
    this.setState({book:book});
  }
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12}>
            <h1 className="header">ISBN Book</h1>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12}>
            <Searcher onSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12} className="descricao-livro">
            Dados: {JSON.stringify(this.state.book)}
          </Col>
        </Row>
      </Grid>
    )
  }
}



  

export default App
