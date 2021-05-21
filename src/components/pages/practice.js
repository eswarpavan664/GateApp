/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect} from "react";
import firebase from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

 
 


class practice extends React.Component{
   constructor() {
    super();

    this.state = {
      color: 'green'
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  

  render() {
  const animals = [
    { id: 1, animal: "Dog" },
    { id: 2, animal: "Bird" },
    { id: 3, animal: "Cat" },
    { id: 4, animal: "Mouse" },
    { id: 5, animal: "Horse" }
  ];
        

  return (
    <ul>
      {animals.map(item => (
        <div>
          <form onSubmit={this.onSubmit}>
          <strong>Select Color:</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={this.state.color === "red"}
                  onChange={this.onRadioChange}
                />
                <span>Red</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="green"
                  checked={this.state.color === "green"}
                  onChange={this.onRadioChange}
                />
                <span>Green</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={this.state.color === "blue"}
                  onChange={this.onRadioChange}
                />
                <span>Blue</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="orange"
                  checked={this.state.color === "orange"}
                  onChange={this.onRadioChange}
                />
                <span>Ornage</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="purple"
                  checked={this.state.color === "purple"}
                  onChange={this.onRadioChange}
                />
                <span>Purple</span>
              </label>
            </li>
          </ul>

          <button type="submit">Choose Color</button>
        </form>
        </div>
      ))}
    </ul>
  );
     
  }
}
 
export default  practice;
