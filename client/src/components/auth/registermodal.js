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
import{register} from '../../actions/authactions';
class RegisterModal extends Component {
    state = {

            modal: false,
            name:'',
            role:'',
            email:'',
            password:'',
            msg:null
    };
    static propTypes={
        auth:PropTypes.object.isRequired,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    }
componentDidUpdate(prevProps){
    const{error}=this.props;
    if(error !==prevProps.error){
        if(error.id==='REGISTER_FAIL'){
            this.setState({msg:error.msg.msg});
        }
        else{this.setState({msg:null})};
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
        const {name,email,role,password}=this.state;
        const newEmployee={name,email,role,password}
        //Attempt to register
        this.props.register(newEmployee);
    
    
    }
        
    render() {
        const {employee}=this.props.auth;
    return (
     <div>  {
        employee && employee.role==="ADMIN"? (<div>
        <NavLink onClick={this.toggle}href="#">
            SIGN IN STAFF
        </NavLink>
        <Modal
            isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add employee info to Register 
            </ModalHeader>
            <ModalBody>
                {this.state.msg ? 
                ( <Alert  color='danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">employee Name</Label>
                        <Input
                        type="text"
                        name="name"
                        id="name"
                        className='mb-3'
                       
                        
                        placeholder="add employee Name"
                        onChange={this.onChange}
                        />
                        <Label for="Email"> employee Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        
                        
                        id="email"
                        placeholder="add employee Email"
                        onChange={this.onChange}
                        />
                         <Label for="role">EMPLOYEE ROLE</Label>
                        <Label>
          
          <select value={this.state.value} name="role"
                        className='mb-3'
                        
                        
                        id="role" onChange={this.onChange}>
                           
            <option value="ADMIN">SYSTEM ADMIN</option>
            <option value="MANAGER">MANAGER</option>
            <option value="STORE KEEPER">STORE KEEPER</option>
            
          </select>
        </Label>
                        
                        <Label for="Password"> employee Password</Label>
                        
                        <Input
                        type="password"
                        name="password"
                        
                        className='mb-3'
                        id="password"
                        placeholder=" employee Password"
                        onChange={this.onChange}
                        />
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            REGISTER
                        </Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal></div> )
                     : (null
                )
            }           
     </div>
     );
   }

}
const mapStateToProps=state=>({
    error:state.error,
    auth: state.auth
});
export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);