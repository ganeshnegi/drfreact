import React,{Component} from 'react';
import axios from 'axios';
import './../App.css';

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    addUser = () =>{
        let obj = {}
        obj.first_name = this.state.fname;
        obj.last_name = this.state.lname;
        obj.username = this.state.username;
        obj.password = this.state.password;
        
        axios.post('http://localhost:8000/api/accounts/user/',obj)
        .then((response)=>{
            alert(response.data.msg);
            this.props.history.push('/');
        })
        .catch((error)=>{
            alert('error in data');
            // console.log(error.response.data);
        })
    }

    cancelAction = () =>{
        this.props.history.push('/');
    }


    render(){
        var formStyle = {
            'padding-top': '20px'
        }
        var buttonSeperator = {
            'margin-right': '15px'
        }
        return(
            <div className="addUser">
                <div>
                    <h3>Submit details to create a new user</h3>
                </div>
                <div>
                <form style = {formStyle}>
                    <div class="bx--form-item">
                    <label for="text1" class="bx--label">First Name</label>
                    <input id="fname" name="fname" type="text" class="bx--text-input" placeholder="First name" onChange={this.handleChange}/>
                    
                    </div>
                    <div class="bx--form-item">
                        <label for="text-area-2" class="bx--label">Last Name</label>
                        <input id="lname" name="lname" type="text" class="bx--text-input" placeholder="Last name" onChange={this.handleChange}/>
                    </div>

                    <div class="bx--form-item">
                        <label for="text-area-2" class="bx--label">Username</label>
                        <input id="username"  name="username" type="text" class="bx--text-input" placeholder="Username" onChange={this.handleChange}/>
                    </div>

                    <div class="bx--form-item">
                        <label for="text-area-2" class="bx--label">Password</label>
                        <input id="password" name="password" type="password" class="bx--text-input" placeholder="Password" onChange={this.handleChange}/>
                    </div>

                    <div class="bx--form-item">
                    <button class="bx--btn bx--btn--primary" style={buttonSeperator} type="button" onClick={this.addUser}>Add</button>
                    <button class="bx--btn bx--btn--primary" style={buttonSeperator} type="button" onClick={this.cancelAction}>Cancel</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
export default AddUser;