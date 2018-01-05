import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const BookInfo = (props) => {
  if(props.book){
    return (
      <Grid>
        <Col>
        </Col>
      </Grid>
    )
  }else {
    return (
      <div> 
        <br/>
        <h3>Waiting a ISBN valid ...</h3>
      </div> 
    )
  }
}

export default BookInfo;