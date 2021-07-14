import React, { Component } from 'react'

import { Link } from 'react-router-dom';



class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.logoutHandler = e => {
            e.preventDefault();
            props.Logout();
        };

    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">


                        <div class="container-fluid">
                            <div class="navbar-header">
                                <Link class="navbar-brand nav-item nav-link active" to="/">SOLVER APP</Link>

                            </div>

                            <ul class="nav navbar-nav">
                                <Link class="nav-item nav-link " to="/input-aritm">Arithmetic</Link>
                                <Link class="nav-item nav-link " to="/input-matrix">Matrix</Link>
                                <Link class="nav-item nav-link " to="/input-log">Logic</Link>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">

                                <Link class="nav-item nav-link " to="/history">History</Link>
                                <button class="btn btn-outline-primary nav-item nav-link " onClick={this.logoutHandler}><span class="glyphicon glyphicon-user"></span> Logout </button>


                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )




    }
}

export default HeaderComponent





