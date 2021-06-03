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
import Questions from "../data";
 

class practice extends React.Component{

  constructor(props){
    super();
    this.state = {
      s:0,
        answer:0,
        setcolor:['red','green','none'],
          correctanswer:" ",
          wronganswer:" ",

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
            correctanswer:"Correct Answer",
            wronganswer:" ",


             })
     }
     
      
   
     else{
      this.setState({
        selectedOption:event.target.value,
        correctanswer:" ",
        wronganswer:" ",
        wronganswer:"Wrong Answer",
   
        })
     }
      
      
  }

  gonextquestion=(event)=>{
    event.preventDefault();
      this.setState({
         s:this.state.s+1,
         correctanswer:" ",
         wronganswer:" ",
         
      })
  }

  goprequestion=(event)=>{
    event.preventDefault();
    this.setState({
       s:this.state.s-1,
       correctanswer:" ",
       wronganswer:" ",
    })
}

  checkanswer=(props)={

     



  }
  nextquestion =()=>{
    
  }

  render() {
    const len = this.state.Questions.length;
    return (

          <div style={{margin:'20%',backgroundColor:'pink'}}>
          <form  className="questionbox">

                <h2 style={{color:'black',textAlign:'center'}}>{this.state.Questions[this.state.s].Question}</h2>

                  <div style={{marginLeft:'10%',fontSize:20}}>
                    <label>
                      <input
                        type="radio"
                        value={this.state.Questions[this.state.s].findAnswer[0]}
                        checked={this.state.selectedOption ===this.state.Questions[this.state.s].findAnswer[0]}
                        onChange={this.onValueChange}
                         
                      />
                      {this.state.Questions[this.state.s].findAnswer[0]}
                    </label>
                  </div>


                  <div style={{marginLeft:'10%',fontSize:20}}>
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

                  <div style={{marginLeft:'10%',fontSize:20}}>
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

                  <div  style={{marginLeft:'10%',fontSize:20}}>
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

                    <div> 
                        <h2 style={{textAlign:'center',color:'lightgreen'}}>{this.state.correctanswer}</h2>
                        <h2 style={{textAlign:'center',color:'red'}}>{this.state.wronganswer}</h2>
                    </div>



                  <div className="optin">
                      {this.state.s>=1?  <button className="prequestion"  onClick={this.goprequestion}>  <h2  >Pre</h2></button> :null}
                     
                        {this.state.s<len-1?<button  className="nextquestion"  onClick={this.gonextquestion}>  <h2 >Next</h2></button>:null} 
                  </div>

                
                </form>

                


          </div>
      
    );
  }
}
 
export default  practice;
