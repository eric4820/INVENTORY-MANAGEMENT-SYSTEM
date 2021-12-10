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
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import{clearErrors} from '../../actions/erroractions';
import{login} from '../../actions/authactions';
class LoginModal extends Component {
    state = {

            modal: false,
            email:'',
            password:'',
            msg:null
    };
    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
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
        const employee={email,password}
        //attempt to login
    this.props.login(employee);
    
    }
        
    render() {
    return (
     <div>
        <NavLink onClick={this.toggle}href="#">
           EMPLOYEE LOGIN
        </NavLink>
        <Modal
            isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add employee info to LOGIN
            </ModalHeader>
            <ModalBody>
            {this.state.msg ? 
                ( <Alert  color='danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        
                        <Label for="Email"> employee Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        autocomplete="on"
                        id="email"
                        placeholder="add employee Email"
                        onChange={this.onChange}
                        />
                        
                        <Label for="Password"> employee Password</Label>  
                        
                        <Input
                        type="password"
                        name="password"
                        autocomplete="off"
                        className='mb-3'
                        id="password"
                        placeholder=" employee Password"
                        onChange={this.onChange}
                        />
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            LOGIN
                        </Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>           
     </div>
     );
   }

}
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
});
export default connect(mapStateToProps,{login,clearErrors})(LoginModal);