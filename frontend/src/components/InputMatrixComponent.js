import React, { Component } from 'react'
import LexerService from '../services/LexerService';

class InputMatrixComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            firstName: '',
            result: '',
            matrixSizeAx: (this.props.match.params.sizeAx > 0) ? parseInt(this.props.match.params.sizeAx) : null,
            matrixSizeAy: (this.props.match.params.sizeAy > 0) ? parseInt(this.props.match.params.sizeAy) : null,
            matrixSizeBx: (this.props.match.params.sizeBx > 0) ? parseInt(this.props.match.params.sizeBx) : null,
            matrixSizeBy: (this.props.match.params.sizeBy > 0) ? parseInt(this.props.match.params.sizeBy) : null,
            selection: null,
            matrix1: null,
            matrix2: null
        }




        this.changeExprHandler = this.changeExprHandler.bind(this);


        console.log(this.props.match.params); //redci =2
        console.log(this.state.matrixSizeBx); //stupci =3

        if (this.state.matrixSizeAx && this.state.matrixSizeAy) {
            this.state.matrix1 = new Array(this.state.matrixSizeAx);
            for (var i = 0; i < this.state.matrixSizeAx; i++) {
                this.state.matrix1[i] = new Array(this.state.matrixSizeAy);
            }


            this.numbers = Array.from(Array(this.state.matrixSizeAx).keys());
            this.numbers2 = Array.from(Array(this.state.matrixSizeAy).keys());

        }
        if (this.state.matrixSizeBx && this.state.matrixSizeBy) {
            this.state.matrix2 = new Array(this.state.matrixSizeBx);
            for (i = 0; i < this.state.matrixSizeBx; i++) {
                this.state.matrix2[i] = new Array(this.state.matrixSizeBy);
            }

            this.numbers3 = Array.from(Array(this.state.matrixSizeBx).keys());
            this.numbers4 = Array.from(Array(this.state.matrixSizeBy).keys());
        }



    }

    matrixSizeChange1 = (event) => {

        this.setState({ matrixSizeAx: event.target.value });
        //this.props.history.push('/input-matrix/' + event.target.value);
        //window.location.reload();
    }
    matrixSizeChange2 = (event) => {

        this.setState({ matrixSizeAy: event.target.value });
        //this.props.history.push('/input-matrix/' + event.target.value);
        //window.location.reload();
    }
    matrixSizeChange3 = (event) => {

        this.setState({ matrixSizeBx: event.target.value });
        //this.props.history.push('/input-matrix/' + event.target.value);
        //window.location.reload();
    }
    matrixSizeChange4 = (event) => {

        this.setState({ matrixSizeBy: event.target.value });

    }

    go = (e) => {
        if (this.state.matrixSizeAx != null && this.state.matrixSizeAy != null && this.state.matrixSizeBy != null && this.state.matrixSizeBx != null) {
            this.setState({ selection: true });
            this.props.history.push('/input-matrix/' +
                this.state.matrixSizeAx + '/' +
                this.state.matrixSizeAy + '/' +
                this.state.matrixSizeBx + '/' +
                this.state.matrixSizeBy);
            window.location.reload();
        }
        else if (this.state.matrixSizeAx != null && this.state.matrixSizeAy != null) {
            this.setState({ selection: true });
            this.props.history.push('/input-matrix/' + this.state.matrixSizeAx + '/' + this.state.matrixSizeAy);
            window.location.reload();
        }

    }

    componentDidMount() {


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

        return <h3 className="text-center">Matrix solver</h3>

    }

    matrix1change = (e) => {

        //console.log(e.target.value);
        var x = parseInt(e.target.getAttribute("stupac"))
        var y = parseInt(e.target.getAttribute("redak"))

        var newArray = this.state.matrix1.map(function (arr) {
            return arr.slice();
        });

        newArray[y][x] = parseInt(e.target.value);
        this.setState({ matrix1: newArray });

    }
    matrix2change = (e) => {

        //console.log(e.target.value);
        var x = parseInt(e.target.getAttribute("stupac"))
        var y = parseInt(e.target.getAttribute("redak"))

        var newArray = this.state.matrix2.map(function (arr) {
            return arr.slice();
        });

        newArray[y][x] = parseInt(e.target.value);
        this.setState({ matrix2: newArray });

    }
    stringify = (e) => {

        console.log("stringify");
        //console.log(this.state.matrix1)
        var str = JSON.stringify(this.state.matrix1)
        var str2 = JSON.stringify(this.state.matrix2)

        str = '{' + str.substring(1, str.length - 1) + '}';
        str2 = '{' + str2.substring(1, str2.length - 1) + '}';
        console.log(str)

        this.setState({ result: str + " + " + str2 });


    }


    redak(x, y, id_matrice) {

        if (id_matrice === 0)
            return <input
                style={{ width: (100 / this.state.matrixSizeAy) + "px" }}
                key={y}
                stupac={y}
                redak={x}
                onChange={this.matrix1change}
                value={this.state.matrix1[x][y]} />
        else
            return <input
                style={{ width: (100 / this.state.matrixSizeBy) + "px" }}
                key={y}
                stupac={y}
                redak={x}
                onChange={this.matrix2change}
                value={this.state.matrix2[x][y]} />

    }

    matrix(br_stupca, id_matrice) {
        console.log("stvori redak")
        return (
            !id_matrice ? this.numbers2.map((object, i) => (this.redak(br_stupca, i, id_matrice))) :
                this.numbers4.map((object, i) => (this.redak(br_stupca, i, id_matrice)))
        )
    }


    render() {

        if (!this.props.match.params.sizeAx)

            return (


                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">

                                <button className="btn btn-warning" onClick={this.cancel.bind(this)} >See history</button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Go back</button>
                                <br></br><br></br>
                                <div className="d-flex justify-content-around">
                                    <div>Dimenzija matrice A</div>
                                    <div></div>
                                    <div>Dimenzija matrice B</div>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <div>

                                        <select onChange={this.matrixSizeChange1} className="form-control" id="exampleFormControlSelect1">
                                            <option>Redci</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                    </div>
                                    <div>

                                        <select onChange={this.matrixSizeChange2} className="form-control" id="exampleFormControlSelect1">
                                            <option>Stupci</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <button className="btn btn-success" onClick={this.go} >Go</button>
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <select onChange={this.matrixSizeChange3} className="form-control" id="exampleFormControlSelect1">
                                            <option>Redci</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div>

                                        <select onChange={this.matrixSizeChange4} className="form-control" id="exampleFormControlSelect1">
                                            <option>Stupci</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                    </div>

                                </div>






                            </div>
                        </div>
                    </div>

                </div>

            )
        else return (
            <div>
                <br></br>
                <button className="btn btn-warning" onClick={this.cancel.bind(this)} >See history</button>

                <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Go back</button>
                <br /><br />
                <input readOnly placeholder="stringified version [FOR DEBUG]" name="firstName" className="form-control"
                    value={this.state.result} />
                <br></br>
                <div className="d-flex justify-content-around">
                    <div>A</div>
                    <div></div>
                    <div>{this.numbers3 ? "B" : null}</div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className=" matrix" style={{ width: "100px" }} >
                        {this.numbers.map((object, i) => this.matrix(i, 0))}
                    </div>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                AxB
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                det(A)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                A+B
                            </label>
                        </div>
                        <button className="btn btn-success" onClick={this.stringify}>Solve</button>

                    </div>


                    <div className=" matrix" style={{ width: "100px" }} >
                        {this.numbers3 ? this.numbers3.map((object, i) => this.matrix(i, 1)) : null}
                    </div>
                </div>




            </div>

        )
    }
}

export default InputMatrixComponent

