import React, {Component} from 'react'
import './App.css';
import KeyPad from './KeyPad';
import Result from './Result';
class App extends Component {

  constructor(){
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
  var checkResult = ''
  // if(this.state.result.includes('--')){
  //     checkResult = this.state.result.replace('--','+')
  // }

 // if {
      checkResult = this.state.result
      this.setState({
        result: eval(checkResult)
      })
//  }

  // try {
  //     this.setState({
  //         // eslint-disable-next-line
  //         result: (eval(checkResult) || "" ) + ""
  //     })
  // } catch (e) {
  //     this.setState({
  //         result: "error"
  //     })

  // }
};

 result=()=>{
   this.setState({
     result:""
   })
 }

 backspace=()=>{
   this.setState({
     result: this.state.result.slice(0,-1)
   })
 }

  render(){
    return(
      <div>
        <div className = "calc">
          <h1>Calculator</h1>
          <Result result = {this.state.result}/>
          <KeyPad onClick= {this.onClick}/>
        </div>

      </div>
    );
  }

}

export default App;
