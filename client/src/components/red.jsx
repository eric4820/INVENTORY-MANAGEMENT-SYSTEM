import React, { Component} from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import  { Link,BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Navbar} from 'reactstrap';
import supplier from '../components/supplier'
import INventory from '../components/Inventory'
import Dispatch from '../components/Dispatchtable'
class InventorySystemsTables extends Component { 
    state={
        ListGroup:false,
        
    };
    static propTypes={
        
        auth:PropTypes.object.isRequired
        
    }
    toggle=() =>{
        this.setState(
            {isOpen:!this.state.isOpen}); 

                }       
                
                
                render() {
const {employee}=this.props.auth;

                    return(<div >
                    <Router>
                      <div  >
                      {
                            employee && employee.role==="MANAGER" ? (
                          <Navbar color="dark" dark expand="sm" className="mb-5">
                      <Link to="/inventories">VIEW RECEIVED INVENTORIES</Link>
                      <Link to="/Dispatch">VIEW DISPATCHED INVENTORIES</Link>
                      <Link to="/supplier">VIEW SUPPLIERS</Link>
                      </Navbar>
                      )
                      : (null)}   
                      </div>
                    
                     <Switch>
                       <Route path="/inventories" exact component={INventory}/>
                       <Route path="/Dispatch" exact component={Dispatch}/>
                       <Route path="/supplier" exact component={supplier}/>
                     </Switch>
                   </Router>
                    
                    
                    </div>)
        
    }
    
    
    
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null) (InventorySystemsTables);