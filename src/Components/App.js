import React, { Component } from 'react'
import { Grid, Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap'

class App extends Component {
  state = { book: null }
  handleSubmit = (book) => {
    this.setState({ book: book });
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
            <InputGroup bsSize="lg">
              <FormControl type="text" placeholder="Digite o ISBN..." className="busca-text"/>
              <InputGroup.Button>
                <Button bsStyle="primary">Buscar</Button>
              </InputGroup.Button>
          </InputGroup>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={12} lg={12}>
            
          </Col>
        </Row>
      </Grid>
    )
  }
}



  

export default App
