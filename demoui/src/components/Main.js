import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from './AddUser'
import App from '../App'

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path='/' component={App} />
                        <Route path='/adduser' component={AddUser} /> 
                    </div>               
                </Router>
            </div>
        )
    }
}