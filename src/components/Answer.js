import React,{Component,Fragment} from 'react'

class Answer extends Component {
    state={
        Answer:this.props.answer,
        Cilckcheck:true,
        rightAnswer:this.props.rightAnswer
    }

    onAnswer =(answer) =>{
        
    };


    render(){
        return(
                <Fragment>
                    

                    {this.state.Answer.map(ans =>{

                     return  <div>
                     <input type="radio" id="male" name="gender" value={this.rightAnswer} onChange={this.onAnswer}/>
                        <label for="male">{ans}</label>
                            </div>



                    })


                    };



                </Fragment>
        );
    }
}

export default Answer
