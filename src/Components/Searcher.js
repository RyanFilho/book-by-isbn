import React from 'react'
import { FormControl, Button, InputGroup} from 'react-bootstrap'
import axios from 'axios'

class Searcher extends React.Component {
  state = { isbnCode: '' }
  handleSubmit  = (event) => {
  	event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.isbnCode}`)
    	.then(results => {        

        this.setState({ isbnCode: ''});
        if (results.data.totalItems) {          
          // There'll be only 1 book per ISBN
          var book = results.data.items[0]["volumeInfo"];
          
          // Send do parent component
          this.props.onSubmit(book);         
                    
        }
      });
  }
  render(){
    return (
      <InputGroup bsSize="lg">
        <FormControl type="text" placeholder="Digite o ISBN..." className="busca-text" onChange = {(event) => this.setState({isbnCode: event.target.value})} />
        <InputGroup.Button>
          <Button bsStyle="primary" onClick={this.handleSubmit} >Buscar</Button>
        </InputGroup.Button>
      </InputGroup>
    )
  }
}
export default Searcher