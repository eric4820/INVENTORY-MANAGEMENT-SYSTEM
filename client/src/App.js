import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'


import Stock from './components/Stock'
import Customer from './components/CustomerProfile'
import{Provider}from 'react-redux';
import store from './store';
import './App.css';
import {loadUser}from './actions/authactions'
  


import ItemModal from './components/auth/ItemModal';
import UserProfile from './components/UserProfille';
import InventoryPOS from './components/point-of-sale';
import EMployee from './components/Employeesprofiles'; 

import InventorySystemsTables from './components/red';
    

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App" >
     
        <AppNavbar />
        <div className="inc-exp-container">
       
     <InventoryPOS /> 
       </div>
       <Stock />
       <div className="inc-exp-containertables">    
      
       <InventorySystemsTables />
       
       </div>  
                  
       <UserProfile />
        <Customer />  
      <EMployee />
      
     
    
        
          
         
        
      </div>
      </Provider>
    );
  }  
}
export default App; 