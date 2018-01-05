import React from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class Searcher extends React.Component {
  state = { isbnCode: '' }
  handleSubmit  = (event) => {
    console.log(this.state.isbnCode);
  	event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.isbnCode}`)
    	.then(results => {
        this.setState({ isbnCode: ''});
        if (results.data.totalItems) {
          
          // There'll be only 1 book per ISBN
          var book = results.data.items[0]["volumeInfo"];

          // Send book details to parent component
          this.props.onSubmit(book);              
        } else {
          // Send nothing to parent component
          this.props.onSubmit(null);              
        }
      });
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Form inline onSubmit={this.handleSubmit}>
              <FormGroup controlId='formInlineName'>
                <ControlLabel>ISBN</ControlLabel>
                {' '}
                <FormControl 
                  type='text' 
                  placeholder='ISBN code' 
                  value={this.state.isbnCode}
                  onChange = {(event) => this.setState({isbnCode: event.target.value})}
                  required
                />
              </FormGroup>
              {' '}
              <Button type='submit'>
                  Search Book
              </Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default Searcher