import React from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import axios from 'axios'

class Searcher extends React.Component {
  state = { isbnCode: '' }
  handleSubmit  = (event) => {
    console.log(this.state.isbnCode);
  	event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.isbnCode}`)
    	.then(results => {
        console.log(results)
        this.setState({ isbnCode: ''});
        if (results.totalItems) {
          
          // There'll be only 1 book per ISBN
          var book = results.items[0]["volumeInfo"];
          console.log(book);
          // Send do parent component
          //this.props.onSubmit(resp.data);        
        }
      });
  }

  render(){
    return (
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
    )
  }
}
export default Searcher