import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    NavItem,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PRegisterModal from './Pregistermodal';

import{clearErrors} from '../../actions/erroractions';
import{plogin,pregister} from '../../actions/supplieraction';
class PLoginModal extends Component {
    state = {

            modal: false,
            email:'',
            password:'',
            msg:null
    };
    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        plogin:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired,
        pregister:PropTypes.func.isRequired
    };
componentDidUpdate(prevProps){
    const{error,isAuthenticated}=this.props;
    if(error !==prevProps.error){
        if(error.id==='LOGIN_FAIL'){
            this.setState({msg:error.msg.msg});  
        }
        else{this.setState({msg:null})};
    }
    if(this.state.modal){
        if(isAuthenticated){
            this.toggle();
        }
    }
}
    toggle=()=>{
        this.props.clearErrors();
     this.setState({
       modal:!this.state.modal
     });
    }
    onChange=(e)=>{
      this.setState({ [e.target.name]:e.target.value });
      
      
      
      
    };
    onSubmit=e=>{
        e.preventDefault();
        const {email,password}=this.state;
        const supplier={email,password}
        //attempt to login
    this.props.plogin(supplier);
    
    }
        
    render() {
    return (
     <div>
        <NavLink onClick={this.toggle}href="#">
            SUPPLIER-LOGIN 
        </NavLink>
        <Modal
            isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add user info to LOGIN
            </ModalHeader>
            <ModalBody>
            {this.state.msg ? 
                ( <Alert  color='danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        
                        <Label for="Email"> User Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        autocomplete="off"
                        id="email"
                        placeholder="add User Email"
                        onChange={this.onChange}
                        />
                        
                        <Label for="Password"> User Password</Label>
                        
                        <Input
                        type="password"
                        name="password"
                        autocomplete="off"
                        className='mb-3'
                        id="password"
                        placeholder=" User Password"
                        onChange={this.onChange}
                        />
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            LOGIN
                        </Button>
                       
                    </FormGroup>
                </Form>
               
               
            </ModalBody>
            {<h4>Hey , don`t have an account then ,  </h4>}
            <NavItem>
                                            <PRegisterModal />
                         </NavItem>
        </Modal>           
     </div>
     );
   }

}
const mapStateToProps=state=>({
    isAuthenticated:state.pauth.isAuthenticated,
    error:state.error
});
export default connect(mapStateToProps,{plogin,pregister,clearErrors})(PLoginModal);