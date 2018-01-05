import React from 'react'
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap'

const BookInfo = (props) => {
  if(props.book){
    console.log(props.book);
    return (
      <Grid>
        <Row>
          <Col sm={4} md={4}>
            <Image src="https://www.technodoze.com/wp-content/uploads/2016/03/default-placeholder.png" thumbnail />
          </Col>
          <Col sm={8} md={8}>
            <PageHeader>
              <small>{props.book.title}</small>
            </PageHeader>
          </Col>
        </Row>
      </Grid>
    )
  }else {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h3>Waiting a ISBN valid ...</h3>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BookInfo;