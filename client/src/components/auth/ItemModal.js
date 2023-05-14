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
    
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import{clearErrors} from '../../actions/erroractions';
import{addInventory} from '../../actions/Inventoryaction';
class ItemModal extends Component { 
    state = {

            modal: false,
            product:'',
            role:'',
            email:'',
            description:'',
            password:'',
            msg:null    
    };
   
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
        const {product,email,description,quantity,expirydate}=this.state;
        const newUser={product,email,description,quantity,expirydate}
       
        this.props.addInventory(newUser);
        
    
        this.toggle();
    }
        
    render() {
        const {employee}=this.props.auth;
        let productdescription=null;
        
        <div> 
       {this.state.product==="shampoo"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
            <option value="grapefruit shampoo 20ltr">Grapefruit shampoo 20 LTR</option>
            <option value="lime shampoo 20ltr">Lime shampoo 20 LTR</option>
            <option value="coconut shampoo 20ltr">Coconut shampoo 20 LTR</option>
            <option value="mango shampoo 20ltr">Mango shampoo 20 LTR</option>
            <option value="grapefruit shampoo 5 ltr">Grapefruit shampoo 5 LTR</option>
            <option value="lime shampoo 5 ltr">Lime shampoo 5LTR</option>
            <option value="coconut shampoo 5 ltr">Coconut shampoo 5 LTR</option>
            <option value="mango shampoo 5 ltr">Mango shampoo 5LTR</option>
            <option value="grapefruit shampoo 1 ltr">Grapefruit shampoo 1 LTR</option>
            <option value="lime shampoo 1 ltr">Lime shampoo 1 LTR</option>
            <option value="coconut shampoo 1 ltr">Coconut shampoo 1 LTR</option>
            <option value="mango shampoo 1 ltr">Mango shampoo 1 LTR</option>
            <option value="grapefruit shampoo 500 ml">Grapefruit shampoo 500 ML</option>
            <option value="lime shampoo 500 ml">Lime shampoo 500 ML</option>
            <option value="coconut shampoo 500 ml">Coconut shampoo 500 ML</option>
            <option value="mango shampoo 500 ml">Mango shampoo 500 ML</option>
            <option value="grapefruit shampoo 280 ML">Grapefruit shampoo 280 ML</option>
            <option value="lime shampoo 280 ML">Lime shampoo 280 ML</option>
            <option value="coconut shampoo 280 ML">Coconut shampoo 280 ML</option>
            <option value="mango shampoo 280 ML">Mango shampoo 280 ML</option>
          </select>
        </Label>}</>):null}
        {this.state.product==="conditioner"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="grapefruit conditioner 20ltr">Grapefruit conditioner 20 LTR</option>
            <option value="lime conditioner 20ltr">Lime conditioner 20 LTR</option>
            <option value="coconut conditioner 20ltr">Coconut conditioner 20 LTR</option>
            <option value="mango conditioner 20ltr">Mango conditioner 20 LTR</option>
            <option value="grapefruit conditioner 5 ltr">Grapefruit conditioner 5 LTR</option>
            <option value="lime conditioner 5 ltr">Lime conditioner 5LTR</option>
            <option value="coconut conditioner 5 ltr">Coconut conditioner 5 LTR</option>
            <option value="mango conditioner 5 ltr">Mango conditioner 5LTR</option>
            <option value="grapefruit conditioner 1 ltr">Grapefruit conditioner 1 LTR</option>
            <option value="lime conditioner 1 ltr">Lime conditioner 1 LTR</option>
            <option value="coconut conditioner 1 ltr">Coconut conditioner 1 LTR</option>
            <option value="mango conditioner 1 ltr">Mango conditioner 1 LTR</option>
            <option value="grapefruit conditioner 500 ml">Grapefruit conditioner 500 ML</option>
            <option value="lime conditioner 500 ml">Lime conditioner 500 ML</option>
            <option value="coconut conditioner 500 ml">Coconut conditioner 500 ML</option>
            <option value="mango conditioner 500 ml">Mango conditioner 500 ML</option>
            <option value="grapefruit conditioner 280 ML">Grapefruit conditioner 280 ML</option>
            <option value="lime conditioner 280 ML">Lime conditioner 280 ML</option>
            <option value="coconut conditioner 280 ML">Coconut conditioner 280 ML</option>
            <option value="mango conditioner 280 ML">Mango conditioner 280 ML</option>
          </select>
        </Label>}</>):null}
        {this.state.product==="hairfood"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="hairfood 500gms"> Hairfood 500 gms</option>
                            <option value="hairfood 200gms"> Hairfood 200 gms</option>
                            <option value="hairfood 100gms"> Hairfood 100 gms</option>
                            <option value="hairfood 50gms"> Hairfood 50 gms</option>
                           
          </select>
        </Label>}</>):null}
        {this.state.product==="pomade"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="pomade 500gms"> Pomade 500 gms</option>
                            <option value="pomade 200gms"> Pomade 200 gms</option>
                            <option value="pomade 100gms"> Pomade 100 gms</option>
                            <option value="pomade 50gms"> Pomade 50 gms</option>
                            
          </select>
        </Label>}</>):null}
        {this.state.product==="glyceline"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="glyceline 500mls"> Glyceline 500 mls</option>
                            <option value="glyceline 200mls"> Glyceline 200 mls</option>
                            <option value="glyceline 100mls"> Glyceline 100 mls</option>
                            <option value="glyceline 50mls"> Glyceline 50 mls</option>
                            
          </select>
        </Label>}</>):null}
       
       
        {this.state.product==="production-chemical"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="RAJ OIL"> RAJ OIL </option>
                            <option value="INDUSTRIAL SALT"> INDUSTRIAL SALT</option>
                            <option value="mango-purfume"> MANGO PERFUME</option>
                            <option value="pineapple-purfume"> PINEAPPLE PERFUME</option>
                            <option value="strawberry-purfume"> STRAWBERRY PERFUME</option>
                            <option value="lemon-purfume"> LEMON PERFUME</option>
                            <option value="yellow-colour"> YELLOW COLOUR</option>
                            <option value="green-colour"> GREEN COLOUR</option>
                            <option value="egg-colour"> EGG COLOUR</option>
                            <option value="formalin"> FORMALIN</option>
                            <option value="CSA"> CSA</option>
                            <option value="GSS"> GSS</option>
                            <option value="CAS"> CAS</option>
                            <option value="PARAFINE-WAX"> PARAFINE WAX</option>
                           
          </select>
        </Label>}</>):null}
        {this.state.product==="containers"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="20-LTS-CONTAINER"> 20 LITRES CONTAINER</option>
                            <option value="5-LTS-CONTAINER"> 5 LITRES CONTAINER</option>
                            <option value="1-LITRE-CONTAINER"> 1 LITRES CONTAINER</option>
                           
                            <option value="500mls-CONTAINER"> 500 mls CONTAINER</option>
                            <option value="280mls-CONTAINER"> 280 mls CONTAINER</option>
                            <option value="200mls-CONTAINER"> 200 mls CONTAINER</option>
                            <option value="100mls-CONTAINER"> 100 mls CONTAINER</option>
                            <option value="50mls-CONTAINER"> 50 mls CONTAINER</option>
                            <option value="500-gms-CONTAINER"> 500 -gms CONTAINER</option>
                            <option value="250-gms-CONTAINER"> 250 -gms CONTAINER</option>
                            <option value="200-gms-CONTAINER"> 200 -gms CONTAINER</option>
                            <option value="100-gms-CONTAINER"> 100 -gms CONTAINER</option>
                            <option value="50-gms-CONTAINER"> 50 -gms CONTAINER</option>
                            <option value="mini-box"> MINI BOX</option>
                            <option value="Max-box"> MAX BOX</option>
                            
                            
          </select>
        </Label>}</>):null}
        {this.state.product==="production-gear/extras"?(<> {  productdescription =<Label>
          
          <select value={this.state.value} name="description"
                        className='mb-3'
                        
                        id="description" onChange={this.onChange}>
                            <option >CHOOSE</option>
                            <option value="GLOVES"> GLOVES</option>
                            <option value="NOSEMASKS"> NOSEMASKS</option>
                              
          </select>
        </Label>}</>):null}
        </div> 
    
    return (
     <div>
       
                <Form className='form' onSubmit={this.onSubmit}>
                    <FormGroup>
                    <Label for="Email"> Supplier Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        
                        id="email"
                        placeholder="add Supplier Email"
                        onChange={this.onChange}
                        />
                       <Label for="name">PRODUCT NAME</Label>
                        <Label>
          
          <select value={this.state.value} name="product"
                        className='mb-3'
                        
                        id="product" onChange={this.onChange}>
                            <option >CHOOSE</option>
            <option value="shampoo">SHAMPOO</option>
            <option value="conditioner">HAIR CONDITIONER</option>
            <option value="hairfood">HAIR FOOD</option>
            <option value="pomade">POMADE</option>
            <option value="glyceline">GLYCELINE</option>
            <option value="production-chemical">PRODUCTION CHEMICAL</option>
            <option value="containers">CONTAINERS</option>
            <option value="production-gear/extras">PRODUCTION GEAR/EXTRAS</option>
          </select>
        </Label>
                        
                        
                        <Label for="description"> Pick PRODUCT DESCRIPTION:</Label>
                        
                       
                        {productdescription}


        {<br></br>}
                         <Label for="expirydate">EXPIRY DATE</Label>
                        <Input
                        type="date"
                        name="expirydate"
                        id="expirydate"
                        className='mb-3'
                        
                        placeholder="Add product expirydate"
                        onChange={this.onChange}
                        />
                        
                       


        {<br></br>}
                         <Label for="quantity">QUANTITY</Label>
                        <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className='mb-3'
                        
                        placeholder="Add Quantity"
                        onChange={this.onChange}
                        />
                         
                        
                        
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            ADD INVENTORY
                        </Button>
                    </FormGroup>
                </Form>
                      
     </div>
     );
   }

}
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error,
    auth: state.auth,
    Inventory:state.Inventory,
    Dispatch:state.Dispatch,
    Stock:state.Stock
});
export default connect(mapStateToProps,{addInventory,clearErrors})(ItemModal);