/* eslint-disable no-self-compare */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */
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
import Axios from "axios";
 
import {GateEceQuestions,GateEeeQuestions,GateInQuestions,EseEceQuestions,EseEeeQuestions,IsroEeeQuestions,IsroEceQuestions} from "../data";
import {useLocation} from "react-router-dom" 
const practice=(props)=>{
  
  let location = useLocation();
     
  const Cource=location.state.cource;
  const Branch=location.state.branch;
  
  return(
       <File Setcource={Cource} Setbranch={Branch}/>
  )
}

class File extends React.Component{
  constructor(props){
    super();
     if(props.Setcource==="GATE"){
       if(props.Setbranch==="ECE"){

                this.state = {
                  s:0,
                    answer:0,
                    setcolor:['red','green','none'],
                      correctanswer:" ",
                      wronganswer:" ",
                    calculater:" ",
                    Questions:GateEceQuestions,
                    isHidden: true,
                    text:" show",
                    text2:"close",posts : [],ps:[]
                }
        }
       else if(props.Setbranch==="EEE")
       {
                this.state = {
                  s:0,
                    answer:0,
                    setcolor:['red','green','none'],
                      correctanswer:" ",
                      wronganswer:" ",
                    calculater:" ",
                    Questions:GateEeeQuestions,
                    isHidden: true,
                    text:" show"
                }
       } 
       else{
          
        this.state = {
          s:0,
            answer:0,
            setcolor:['red','green','none'],
              correctanswer:" ",
              wronganswer:" ",
            calculater:" ",
            Questions:GateInQuestions,
            isHidden: true,
            text:" show"
        }

       } 
     }


     if(props.Setcource==="ESE"){
            if(props.Setbranch==="ECE"){

                this.state = {
                  s:0,
                    answer:0,
                    setcolor:['red','green','none'],
                      correctanswer:" ",
                      wronganswer:" ",
                    calculater:" ",
                    Questions:EseEceQuestions,
                    isHidden: true,
                    text:" show"  
                }
              }
              else if(props.Setbranch==="EEE")
              {
                this.state = {
                  s:0,
                    answer:0,
                    setcolor:['red','green','none'],
                      correctanswer:" ",
                      wronganswer:" ",
                    calculater:" ",
                    Questions:EseEeeQuestions,
                    isHidden: true,
                    text:" show"
                }   
              } 
         }

         if(props.Setcource==="ISRO"){
          if(props.Setbranch==="ECE"){

              this.state = {
                s:0,
                  answer:0,
                  setcolor:['red','green','none'],
                    correctanswer:" ",
                    wronganswer:" ",
                  calculater:" ",
                  Questions:IsroEceQuestions,
                  isHidden: true,
                  text:" show"    
              }
            }
            else if(props.Setbranch==="EEE")
            {
              this.state = {
                s:0,
                  answer:0,
                  setcolor:['red','green','none'],
                    correctanswer:" ",
                    wronganswer:" ",
                  calculater:" ",
                  Questions:IsroEeeQuestions,
                  isHidden: true,
                  text:" show"
              }   
            } 
       }
     

 
  
  
  }
   
   
  componentDidMount() {
    Axios.get("http://localhost:3001/eee").then((response) => {
      this.setState({
        posts:response.data
      })
    });

    Axios.get("http://localhost:3001/ece").then((response) => {
      this.setState({
        ps:response.data
      })
    });
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

discal=(event)=>{
    this.setState({
      calculater:"https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html"
    })
}  
toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
     
  })
}
  render() {
    const len = this.state.Questions.length;

     

    console.log(this.state.posts)
    
    console.log(this.state.ps)
    
    return (

          <div style={{backgroundColor:'white',marginBottom:'5%' }}>
        
          <h1 class="text-center" style={{marginTop:'2%',fontFamily:'-moz-initial',color:'green',fontWeight:'bold',fontSize:55}}>{this.props.Setcource} {this.props.Setbranch}</h1>
          <h1 class="text-center" style={{marginBottom:'5%',fontFamily:'-moz-initial',color:'green',fontWeight:'bold'}}>Questions</h1>
             
            
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
                  
                 



                <div>
        <button  style={{width:100,marginLeft:'35%'}} onClick={this.toggleHidden.bind(this)} >
           Calculater
        </button>
        {!this.state.isHidden ?
          <div class="resp-container">
                    <iframe class="resp-iframe" src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html"  ></iframe>
                </div>
:null
        }
      </div>

    


          </div>
      
    );
  }
}
  
export default  practice;
