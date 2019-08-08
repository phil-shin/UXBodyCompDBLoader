import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // continually fetch data while Component is running
  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 1000);
  }

  // stop data fetching when Component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // [C]reate database doc event handler

  // [R]ead - Get all database data event handler

  // [U]pdate database doc event handler

  // [D]elete database doc event handler

  render() {
    return (
      <div>
        <div className="create-container">
          <input type="text" placeholder="create" onChange={(e)=> {}}></input>
          <button type="submit" value="Submit" onClick={(e)=>{}}></button>
        </div>
        <div className="read-container">
          <input type="text" placeholder="read" onChange={(e)=>{}}></input>
          <button type="submit" value="Submit" onClick={(e)=>{}}></button>
        </div>
        <div className="update-container">
          <input type="text" placeholder="update" onChange={(e)=>{}}></input>
          <button type="submit" value="Submit" onClick={(e)=>{}}></button>
        </div>
        <div className="delete-container">
          <input type="text" placeholder="delete" onChange={(e)=>{}}></input>
          <button type="submit" value="Submit" onClick={(e)=>{}}></button>
        </div>
      </div>
    )
  }
}

export default App;
