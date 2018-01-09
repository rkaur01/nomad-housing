import React, { Component } from 'react'

class SingleListing extends Component{
  constructor(props){
    super(props)
  }

  render(props){
    return(
      <div>
        <h1>Listing Title</h1>
        <h2>Location</h2>
        <h2>Dates</h2>
        <h2>Cost</h2>
        <p>Description</p>
      </div>
    )
  }
}

export default SingleListing