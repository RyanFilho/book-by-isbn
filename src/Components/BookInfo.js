import React from 'react'
//import { PageHeader } from 'react-bootstrap'

const BookInfo = (props) => {
  if(props.book){
    return (
      <div> 
        <p>{JSON.stringify(props.book)}</p>
      </div> 
    )
  }else {
    return (
      <div> 
        <p>Not found.</p>
      </div> 
    )
  }
}

export default BookInfo;