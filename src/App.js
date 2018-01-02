import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button, PageHeader} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>Book by ISBN <small>Search book information by ISBN code.</small></PageHeader>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>ISBN</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="ISBN code" />
          </FormGroup>
          {' '}
          <Button type="submit">
            Search Book
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
