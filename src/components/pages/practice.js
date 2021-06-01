/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect,Fragment} from "react";
import firebase from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
 
import data from "../data";
 

class practice extends React.Component{

  constructor(props){
    super();
    this.state = {
      s:0,
        answer:0,
        setcolor:['red','green','none'],
        c1:2,
        c2:2,
        c3:2,
        c4:2,
      Questions :[
    
        {
             
            Question:"what is your name?",
            findAnswer:["pavan","eswar","pavaneswar","unknown"],
            rightanswer:"pavaneswar"
        },
    
        {
             
            Question:"what your age?",
            findAnswer:["above 18","below 18","above 30","above 50"],
            rightanswer:"below 18"
        },
    
        {
         
            Question:"what languages do u know",
            findAnswer:["c","cpp","react","php"],
            rightanswer:"react"
        },
    
        {
          
            Question:"what is react",
            findAnswer:["language for web","language for android","language for ios","language for cross plateform"],
            rightanswer:"language for cross plateform"
        },
        
    ]
   
    };
    this.onValueChange = this.onValueChange.bind(this);
   
    
  }

  onValueChange(event) {
   
     if(event.target.value===this.state.Questions[this.state.s].rightanswer)
     {
          this.setState({
             selectedOption:event.target.value,
              setcolor:'lawngreen'
        
             })
     }
     
      
   
     else{
      this.setState({
        selectedOption:event.target.value,
          setcolor:'white'
   
        })
     }
      
      
  }

 

  checkanswer=(props)={

     



  }
  nextquestion =()=>{
    
  }

  render() {
    return (

          <div style={{margin:'20%'}}>
          <form onSubmit={this.formSubmit}>
                <h2 style={{color:'black'}}>{this.state.Questions[this.state.s].Question}</h2>

                  <div   >
                    <label  >
                      <input
                        type="radio"
                        value={this.state.Questions[this.state.s].findAnswer[0]}
                        checked={this.state.selectedOption ===this.state.Questions[this.state.s].findAnswer[0]}
                        onChange={this.onValueChange}
                         
                      />
                      {this.state.Questions[this.state.s].findAnswer[0]}
                    </label>
                  </div>


                  <div>
                    <label>
                      <input
                        type="radio"
                        value={this.state.Questions[this.state.s].findAnswer[1]}
                        checked={this.state.selectedOption ===this.state.Questions[this.state.s].findAnswer[1]}
                        onChange={this.onValueChange}
                      />
                      {this.state.Questions[this.state.s].findAnswer[1]}
                    </label>
                  </div>

                  <div style={{backgroundColor:this.state.setcolor[this.state.c3]}}>
                    <label  style={{backgroundColor:this.state.setcolor}}>
                      <input
                        type="radio"
                        value={this.state.Questions[this.state.s].findAnswer[2]}
                        checked={this.state.selectedOption ===this.state.Questions[this.state.s].findAnswer[2]}
                        onChange={this.onValueChange}
                      />
                      {this.state.Questions[this.state.s].findAnswer[2]}
                    </label>
                  </div>

                  <div  style={{backgroundColor:this.state.setcolor[this.state.c4]}}>
                    <label>
                      <input
                        type="radio"
                        value={this.state.Questions[this.state.s].findAnswer[3]}
                        checked={this.state.selectedOption ===this.state.Questions[this.state.s].findAnswer[3]}
                        onChange={this.onValueChange}
                      />
                      {this.state.Questions[this.state.s].findAnswer[3]}
                    </label>
                  </div>



                  

                </form>
          </div>
      
    );
  }
}
 
export default  practice;
