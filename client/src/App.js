import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      ftToAdd: null,
      inToAdd: null,
      lnWeightToAdd: null,
      lnAthNameToAdd: null,
      lnAthPosToAdd: null,
      lnAthImgPathToAdd: null,
      athWeightToAdd: null,
      athAthNameToAdd: null,
      athAthPosToAdd: null,
      athAthImgPathToAdd: null,
      blkWeightToAdd: null,
      blkAthNameToAdd: null,
      blkAthPosToAdd: null,
      blkAthImgPathToAdd: null,
      fieldToUpdate: null,
      updateToApply: null,
      ftToDelete: null,
      inToDelete: null
    };
  };

  // continually fetch data while Component is running
  componentDidMount() {
    this.interval = setInterval(() => this.getDataFromDB(), 1000);
  };

  // stop data fetching when Component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  };

  // [C]reate database doc event handler
  createDoc = (feet, inches, lnWeight, lnAthName, lnAthPos, lnAthImgPath, 
    athWeight, athAthName, athAthPos, athAthImgPath, 
    blkWeight, blkAthName, blkAthPos, blkAthImgPath) => 
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
      });

  // [R]ead - Get all database data event handler
  getDataFromDB= () => {
    axios.get('http://localhost:3001/api/getData')
    .then((data) => this.setState({data : data}))
    .catch((error) => console.log(error))
  };

  // [U]pdate database doc event handler
  updateDoc = (feet, inches, field, update) => {
    axios.post('http://localhost:3001/api/updateData', {
      feet: feet,
      inches: inches,
      field: field,
      update: update
    })
    .catch((error) => console.log(error));
  };

  // [D]elete database doc event handler
  deleteDoc = (feet, inches) => {
    axios.delete('http://localhost:3001/api/deleteData', {
      feet: feet,
      inches: inches
    })
    .catch((error) => console.log(error))
  };


  render() {
    return (
      <div>
        <div className="create-container" style={{padding: '10px'}}>
          <input type="text" placeholder="Feet" onChange={(e)=> {this.setState({ftToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Inches" onChange={(e)=> {this.setState({inToAdd: e.target.value})}}></input><br></br>
          <input type="text" placeholder="Lean Weight (lbs)" onChange={(e)=> {this.setState({lnWeightToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Lean Athlete Name" onChange={(e)=> {this.setState({lnAthNameToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Lean Athlete Position" onChange={(e)=> {this.setState({lnAthPosToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Lean Athlete Image Path" onChange={(e)=> {this.setState({lnAthImgPathToAdd: e.target.value})}}></input><br></br>
          <input type="text" placeholder="Athletic Weight (lbs)" onChange={(e)=> {this.setState({athWeightToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Athletic Athlete Name" onChange={(e)=> {this.setState({athAthNameToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Athletic Athlete Position" onChange={(e)=> {this.setState({athAthPosToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Athletic Athlete Image Path" onChange={(e)=> {this.setState({athAthImgPathToAdd: e.target.value})}}></input><br></br>
          <input type="text" placeholder="Bulky Weight (lbs)" onChange={(e)=> {this.setState({blkWeightToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Bulky Athlete Name" onChange={(e)=> {this.setState({blkAthNameToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Bulky Athlete Position" onChange={(e)=> {this.setState({blkAthPosToAdd: e.target.value})}}></input>
          <input type="text" placeholder="Bulky Athlete Image Path" onChange={(e)=> {this.setState({blkAthImgPathToAdd: e.target.value})}}></input>
          <button type="submit" value="Submit" onClick={(e)=>{this.createDoc(
            this.state.ftToAdd, this.state.inToAdd, 
            this.state.lnWeightToAdd, this.state.lnAthNameToAdd, this.state.lnAthPosToAdd, this.state.lnAthImgPathToAdd, 
            this.state.athWeightToAdd, this.state.athAthNameToAdd, this.state.athAthPosToAdd, this.state.athAthImgPathToAdd, 
            this.state.blkWeightToAdd, this.state.blkAthNameToAdd, this.state.blkAthPosToAdd, this.state.blkAthImgPathToAdd
          )}}></button>
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
  };
};

export default App;
