import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data=[],
      ftToAdd = null,
      inToAdd = null,
      lnWeightToAdd = null,
      lnAthNameToAdd = null,
      lnAthPosToAdd = null,
      lnAthImgPathToAdd = null,
      athWeightToAdd = null,
      athAthNameToAdd = null,
      athAthPosToAdd = null,
      athAthImgPathToAdd = null,
      blkWeightToAdd = null,
      blkAthNameToAdd = null,
      blkAthPosToAdd = null,
      blkAthImgPathToAdd = null,
      fieldToUpdate = null,
      updateToApply = null,
      ftToDelete = null,
      inToDelete = null
    }
  };

  // continually fetch data while Component is running
  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 1000);
  };

  // stop data fetching when Component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  };

  // [C]reate database doc event handler
  createDoc = (feet, inches, lnWeight, lnAthName, lnAthPos, lnAthImgPath, 
    athWeight, athAthName, athAthPos, athAthImgPath, 
    blkWeight, blkAthName, blkAthPos, blkAthImgPath) => {
      axios.post('http://localhost:3001/api/createData', {
        feet: feet,
        inches: inches,
        leanWeight: lnWeight,
        leanAthleteName: lnAthName,
        leanAthletePosition: lnAthPos,
        leanAthleteImagePath: lnAthImgPath,
        athleticWeight: athWeight,
        athleticAthleteName:athAthName,
        athleticAthletePosition: athAthPos,
        athleticAthleteImagePath: athAthImgPath,
        bulkyWeight: blkWeight,
        bulkyAthleteName: blkAthName,
        bulkyAthletePosition: blkAthPos,
        bulkyAthleteImagePath: blkAthImgPath
      })
  };

  // [R]ead - Get all database data event handler
  getDataFromDB= () => {
    axios.get('http://localhost:3001/api/getData')
    .then((data) => this.setState({data : data}))
    .catch((err) => console.log(err))
  };

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
