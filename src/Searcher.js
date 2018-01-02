import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

const Searcher = (
    <Form inline>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="ISBN code" />
      </FormGroup>
      {' '}
      <Button type="submit">
        Search Book
      </Button>
    </Form>
  );
  
export default Searcher;
  