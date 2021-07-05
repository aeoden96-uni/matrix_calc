import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class LexerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

                stringResult: '',
                stringKraj: ''

        }
        this.lexerString = this.lexerString.bind(this);
        this.LexerHandler = this.LexerHandler.bind(this);
    }

    LexerHandler= (event) => {
        event.preventDefault();
        this.setState({stringResult: event.target.value});
    }

    lexerString(){

        // this.props.history.push('/lexer');
      //  console.log(string);
      /*EmployeeService.getEmployees().then((res) => {
                  this.props.history.push(`/employees`);
              });*/

      EmployeeService.lexString(this.state.stringResult).then((res) => {
           this.setState({ stringKraj: res.data});
      });

    }

    componentDidMount(){
        return;

      //  this.setState({stringKraj: this.props.match.params.inputLexString});
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lexer</h2>
                <br></br>
                <form>
                <label> Parse: </label>
                <input placeholder="Input" name="inputLexString" className="form-control" value={this.state.stringResult} onChange={this.LexerHandler}/>
                <br></br>
                <button style={{marginLeft: "10px"}} onClick={ () => this.lexerString()} className="btn btn-info">Parsiraj </button>
                </form>
                <br></br>
                <label> Izparsirano: </label>
                <div> { this.state.stringKraj }</div>
            </div>

        )
    }
}

export default LexerComponent