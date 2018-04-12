import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'
import axios from 'axios'

import Router from 'react-router-dom'

import '../node_modules/carbon-components/css/carbon-components.min.css'



class App extends Component {
    
    constructor(props){
    super(props);
    
    this.state = {
        users : [],
        selectedUserList : []
    }
  }

  getUsers(searchPara){
    axios.get('http://localhost:8000/api/accounts/user/', {
      params: searchPara
    })
    .then((response)=>{
        let arr =response.data;
        this.setState({
            users: response.data
        })
      })
    .catch(error=>{
        console.log(error.response);
      })
  }

  componentWillMount() {
    let params = {}
    this.getUsers(params)
  }

  // for search and filter
  searchTerm = (e) =>{
    let value = e.target.value
    this.getUsers({search: value})
  }

  // checkbox selected, unselected
  selectedUsersChange = (id) =>{
    // debugger

    var obj = [];
    if(this.state.selectedUserList.includes(id)){
      obj = this.state.selectedUserList.filter(selectedId=> selectedId != id)
    }
    else{
      obj = [...this.state.selectedUserList, id]
    }
    setTimeout(()=>{
      this.setState({
        selectedUserList : obj
      });

      console.log(this.state.selectedUserList)  
    },0)
  }

  editUser=(action) =>{
    let url;
    if(action == 'activate'){
      url = 'http://localhost:8000/api/accounts/update/activate/'
    }
    else if (action == 'deactivate'){
      url = 'http://localhost:8000/api/accounts/update/deactivate/'
    }
    else{
      url = 'http://localhost:8000/api/accounts/update/delete/'
    }
    axios.post(url, {
      id : this.state.selectedUserList
    })
    .then((response)=>{
      this.setState({
          selectedUserList: [] 
      })
      this.getUsers()
    })
  .catch(error=>{
      console.log(error.response);
    })
  }
  
  render() {
    const users = this.state.users
    return (
      <UserList users = {users} 
      search={this.searchTerm} 
      editUser={this.editUser} 
      selectedUsers={this.selectedUsersChange}
      />
    );
  }
}

export default App;
