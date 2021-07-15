import React, { Component } from 'react'
import LexerService from '../services/LexerService'

class HistoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {


            povijest: null

        }

    }



    componentDidMount() {
        LexerService.sendHistory().then((res) => {

            this.setState({ povijest: res.data });
            console.log("Recived: ");
            console.log(res.data);

        });


    }
    popuni() {

        if (this.state.povijest == null) return;

        this.state.povijest.map((value, ind) => {
            return <tr>
                <th scope="row">{value.id}</th>
                <td>{value.input}</td>
                <td>{value.output}</td>
                <td>{value.inputType}</td>
            </tr>
        })
    }

    render() {
        return (
            <div >
                <h2 className="text-center">History</h2>
                <br></br>
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Input</th>
                                <th scope="col">Output</th>
                                <th scope="col">Input Type</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.popuni()}

                        </tbody>
                    </table>
                </div>


            </div>

        )
    }
}

export default HistoryComponent