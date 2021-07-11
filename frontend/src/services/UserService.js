import axios from "axios";


const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {

    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }

    addOneUser() {
        return axios.post(USERS_REST_API_URL, { id: 3, name: "newName", email: "newEmail", age: 12 });
    }
}


export default new UserService();