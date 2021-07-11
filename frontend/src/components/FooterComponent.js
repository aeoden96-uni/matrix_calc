import React, { Component } from 'react'

class FooterComponent extends Component {
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
                <footer className="footer">
                    <button className="btn btn-warning position-absolute bottom-0 translate-middle" onClick={this.logoutHandler}>Logout</button>
                </footer>
            </div>
        )
    }
}

export default FooterComponent