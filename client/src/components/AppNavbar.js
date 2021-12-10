import React, { Component,Fragment } from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import{
    
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
    
    Container
} from 'reactstrap';
import RegisterModal from './auth/registermodal';
import Logout from './auth/Logout';

import LoginModal from './auth/Login';
import PLoginModal from './auth/PLogin';


import PLogout from './auth/PLogout';
class AppNavbar extends Component {
    state={
        isOpen:false
    };
    static propTypes={
        
        auth:PropTypes.object.isRequired,
        pauth:PropTypes.object.isRequired
        
    }
    toggle=() =>{
        this.setState(
            {isOpen:!this.state.isOpen});

                }       
                
                
                render() {
const {employee}=this.props.auth;
const {isAuthenticated,supplier}=this.props.pauth;
const authLinks=(
    <Fragment>
        <NavItem>
            <span className="navbar-text mr-4">
                <strong>
                    
                {employee ? `Welcome    ${employee.role}---${employee.name}`: null} 
                    
                </strong>
            </span>
         </NavItem>
         <NavItem>
            <span className="navbar-text mr-4">
                <strong>
                    {supplier ? `Welcome  Supplier ${supplier.name}`: null}
                    
                     
                </strong>
            </span>
         </NavItem>
         {employee ?  <NavItem>
                                         <Logout />
                                        </NavItem>: null} 
                                        {supplier ?  <NavItem>
                                         <PLogout />
                                        </NavItem>: null}
                                        {employee ? <NavItem>
                        <RegisterModal />
                    </NavItem>: null} 
                                        
                   
    </Fragment>
)

   
const guestLinks=(
                        <Fragment>
 <NavItem>
                                         <LoginModal />
                                        </NavItem>
                                        
                                        
                                        <NavItem>
                                            <PLoginModal />
                                        </NavItem>
                                        
                                        
                        </Fragment>
                    )
                    return(<div className="navbar">
                        <Navbar color="dark" dark expand="sm" >
                                <Container>
                                  <NavbarBrand href="/">ORRISA BEAUTY INDUSTRY INVENTORY MANAGEMENT SYSTEM</NavbarBrand>
                                  <NavbarToggler onClick={this.toggle} />
                                  <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        
                                     {isAuthenticated? authLinks  :guestLinks}  
                                       
                                    </Nav>  
                                  </Collapse>
                                </Container>
                              </Navbar>
                                </div>)
        
    }
    
    
    
}
const mapStateToProps=state=>({
    auth:state.auth,
    pauth:state.pauth
})
export default connect(mapStateToProps,null) (AppNavbar);