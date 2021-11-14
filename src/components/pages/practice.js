/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-self-compare */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect,Fragment} from "react";
 
import Axios from "axios";
import ima from '../../images/What.jpeg' 
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
             
               
          {this.state.Questions.map((ques,index) => (
            
                   <Fun q={ques.Question} op={ques.findAnswer} c={ques.rightanswer} id={ques.id} k={index+1}/>

             ))}
          </div>
      
    );
  }
}
  
const Fun=(props)=>{

  const [name,setName] =useState(props.q);
  const [fname,setfName] =useState(props.op);
  const [selected,setSelected] =useState();
  const [correct,setCorrect] =useState("");
  const [Wrong,setWrong] =useState("");
 const onValueChange=(e)=> {
   
    if(e.target.value===props.c)
    {
      setSelected(e.target.value)
      console.log("correct")
      setCorrect("Correct Answer");
      setWrong("")
          
    }
    
     
  
    else{
      setSelected(e.target.value)
      console.log("wrong")
      setCorrect("");
      setWrong("Wrong Answer")
    }
     
     
 }

  
  return(
     <>
         <div class="questionbox">
           <form  className="questionbox" style={{marginBottom:'5%'}}>
 
    {props.id===0?<h1 style={{color:'black',marginLeft:'8%'}}>{props.k}) {name}</h1>
      :
      <div class="row" style={{marginLeft:'8%'}}>
      <h1>{props.k})</h1><img src={name} width="460px" height="150px" style={{marginLeft:'5%'}} class="img-fluid"/>
 
      </div>
    }    
   <div  class="row">

   <div style={{marginLeft:'10%',fontSize:20}} class="col-md-6">
     <label>
       <input
         type="radio"
         value={fname[0]}
         checked={selected===fname[0]}
         onChange={onValueChange}
          
       />
       {fname[0]}
     </label>
   </div>


   <div style={{ fontSize:20}} class="col-md-3">
     <label>
       <input
         type="radio"
         value={fname[1]}
         checked={selected===fname[1]}
         onChange={onValueChange}
       />
       {fname[1]}
     </label>
   </div>

   <div style={{ marginLeft:'10%',fontSize:20}} class="col-md-6">
     <label  >
       <input
         type="radio"
         value={fname[2]}
         checked={selected===fname[2]}
         onChange={onValueChange}
       />
       {fname[2]}
     </label>
   </div>

   <div  style={{  fontSize:20}} class="col-md-3">
     <label>
       <input
         type="radio"
         value={fname[3]}
         checked= {selected===fname[3]}
         onChange={onValueChange}
       />
       {fname[3]}
     </label>
   </div>


   </div>

      
       <div> 
                        <h2 style={{textAlign:'center',color:'blue'}}>{correct}</h2>
                        <h2 style={{textAlign:'center',color:'red'}}>{Wrong}</h2>
                    </div>

 

 
 </form> 
         </div>
  
   
     </>
  )
}

export default  practice;
