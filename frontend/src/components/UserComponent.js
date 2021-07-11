import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
        //console.log(props);
        this.logoutHandler = e => {
            e.preventDefault();
            props.Logout();
        };
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data});
            
        });
    }

    render(){
        
        //console.log( this.state.users);
        return (
            <div>
                <h1 className="text-center" >Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User FirstName</th>
                            <th>User Last Name</th>
                            <th>User Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            this.state.users.map(
                                user => 
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                
                            )

                        }
                    </tbody>

                </table>
                <button onClick={UserService.addOneUser}>Logout</button>
                <button onClick={this.logoutHandler}>Logout</button>
            </div>
            
        )
    }
}

export default UserComponent