import React, { Component } from 'react'
import LexerService from '../services/LexerService';

class InputAritmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            result: ''
        }
        this.changeExprHandler = this.changeExprHandler.bind(this);

    }

    // step 3
    componentDidMount() {

        // step 4
        /*if (this.state.id === '_add') {
            return
        } else {
            LexerService.lexString(this.state.firstName).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName

                });
            });
        }*/
    }
    save = (e) => {
        e.preventDefault();

        //DO SADA UPISAN TEXT
        console.log('expression => ' + JSON.stringify(this.state.firstName));



        LexerService.lexString(this.state.firstName).then((res) => {

            console.log(res.data);
            this.setState({ result: res.data });
        });

    }

    cancel() {
        this.props.history.push('/');
    }

    changeExprHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }





    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Arithmetic solver</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">

                                        <input placeholder="input some expression" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeExprHandler} />
                                    </div>

                                    <br></br>
                                    <button className="btn btn-success" onClick={this.save}>Solve</button>
                                    <button className="btn btn-warning" onClick={this.cancel.bind(this)} >See history</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Go back</button>
                                    <br /><br />
                                    <input readOnly placeholder="input some expression" name="firstName" className="form-control"
                                        value={this.state.result} />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default InputAritmComponent