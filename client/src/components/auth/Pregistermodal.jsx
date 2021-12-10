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
import{pregister} from '../../actions/supplieraction';
class PRegisterModal extends Component {
    state = {

            modal: false,
            name:'',
            product:'',
            email:'',
            password:'',

            msg:null 
    };
    static propTypes={
        
        error:PropTypes.object.isRequired,
        pregister:PropTypes.func.isRequired,
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
        const {name,email,password,location}=this.state;
        const newUser={name,email,password,location}
        //Attempt to register
        this.props.pregister(newUser);
        
;
    
    }
        
    render() {
    return (
     <div>
        <NavLink onClick={this.toggle}href="#">
            SUPPLIER- REGISTER
        </NavLink>
        <Modal
            isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add user info to Register 
            </ModalHeader>
            <ModalBody>
                {this.state.msg ? 
                ( <Alert  color='danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">UserName</Label>
                        <Input
                        type="text"
                        name="name"
                        id="name"
                        className='mb-3'
                        
                        placeholder="add user Name"
                        onChange={this.onChange}
                        />
                        <Label for="Email"> User Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        
                        id="email"
                        placeholder="add User Email"
                        onChange={this.onChange}
                        />
                        <Label for="product"> LOCATION</Label>
                        <Input
                        type="location"
                        name="location"
                        className='mb-3'
                            
                        id="location" 
                        placeholder="add location"
                        onChange={this.onChange}
                        />
                       
                        <Label for="Password"> User Password</Label>
                        
                        <Input
                        type="password"
                        name="password"
                        
                        className='mb-3'
                        id="password" 
                        placeholder=" User Password"
                        onChange={this.onChange}
                        />
                        
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            REGISTER
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
    isAuthenticated:state.pauth.isAuthenticated,
    error:state.error
});
export default connect(mapStateToProps,{pregister,clearErrors})(PRegisterModal);