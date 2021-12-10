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

import{clearErrors} from '../actions/erroractions';

import { addstock } from '../actions/Stockactions.js';
  
class DispatchModal extends Component { 
    state = {

            modal: false,
            product:'',
            role:'',
            email:'',
            description:'',
            
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
        const {product,email,description,quantity,priceperunit}=this.state;
       
        const newDispatch={product,email,description,quantity,priceperunit}
        //Attempt to register
       
        this.props.addstock(newDispatch);
    
        this.toggle();
    }
        
    render() {
        const {employee}=this.props.auth;
     
      let maxquantity=0;
      let productdescription=null;
       const { inventories } = this.props.Inventory;
      
        
       
               const { stocks } = this.props.Stock; 
              
               
       
         inventories.map(({ quantity}) => quantity);

  
        const Rgrapefruitshampoo20ltr = inventories
        .filter(({ description}) => 
        description ==="grapefruit shampoo 20ltr")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rlimeshampoo20ltr = inventories
        .filter(({ description}) => 
        description ==="lime shampoo 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rcoconutshampoo20ltr = inventories
        .filter(({ description}) => 
        description ==="coconut shampoo 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rmangoshampoo20ltr = inventories
        .filter(({ description}) => 
        description ==="mango shampoo 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
         const  Rgrapefruitshampoo5ltr = inventories
        .filter(({ description}) => 
        description ==="grapefruit shampoo 5 ltr")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rlimeshampoo5ltr = inventories
        .filter(({ description}) => 
        description ==="lime shampoo 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rcoconutshampoo5ltr = inventories
        .filter(({ description}) => 
        description ==="coconut shampoo 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rmangoshampoo5ltr = inventories
        .filter(({ description}) => 
        description ==="mango shampoo 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);

          const Rgrapefruitshampoo1ltr = inventories
          .filter(({ description}) => 
          description ==="grapefruit shampoo 1 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rlimeshampoo1ltr = inventories
          .filter(({ description}) => 
          description ==="lime shampoo 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Rcoconutshampoo1ltr = inventories
          .filter(({ description}) => 
          description ==="coconut shampoo 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rmangoshampoo1ltr = inventories
          .filter(({ description}) => 
          description ==="mango shampoo 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
  
            const Rgrapefruitshampoo500ml = inventories
            .filter(({ description}) => 
            description ==="grapefruit shampoo 500 ml")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rlimeshampoo500ml = inventories
            .filter(({ description}) => 
            description ==="lime shampoo 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0); 
              const Rcoconutshampoo500ml = inventories
            .filter(({ description}) => 
            description ==="coconut shampoo 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rmangoshampoo500ml = inventories
            .filter(({ description}) => 
            description ==="mango shampoo 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rgrapefruitshampoo280ml = inventories
              .filter(({ description}) => 
              description ==="grapefruit shampoo 280 ML")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rlimeshampoo280ml = inventories
              .filter(({ description}) => 
              description ==="lime shampoo 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0); 
                const Rcoconutshampoo280ml = inventories
              .filter(({ description}) => 
              description ==="coconut shampoo 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Rmangoshampoo280ml = inventories
              .filter(({ description}) => 
              description ==="mango shampoo 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
      
//CONDITIONER RECEIVED
const Rgrapefruitconditioner20ltr = inventories
        .filter(({ description}) => 
        description ==="grapefruit conditioner 20ltr")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rlimeconditioner20ltr = inventories
        .filter(({ description}) => 
        description ==="lime conditioner 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rcoconutconditioner20ltr = inventories
        .filter(({ description}) => 
        description ==="coconut conditioner 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rmangoconditioner20ltr = inventories
        .filter(({ description}) => 
        description ==="mango conditioner 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
         const  Rgrapefruitconditioner5ltr = inventories
        .filter(({ description}) => 
        description ==="grapefruit conditioner 5 ltr")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rlimeconditioner5ltr = inventories
        .filter(({ description}) => 
        description ==="lime conditioner 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rcoconutconditioner5ltr = inventories
        .filter(({ description}) => 
        description ==="coconut conditioner 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rmangoconditioner5ltr = inventories
        .filter(({ description}) => 
        description ==="mango conditioner 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);

          const Rgrapefruitconditioner1ltr = inventories
          .filter(({ description}) => 
          description ==="grapefruit conditioner 1 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rlimeconditioner1ltr = inventories
          .filter(({ description}) => 
          description ==="lime conditioner 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Rcoconutconditioner1ltr = inventories
          .filter(({ description}) => 
          description ==="coconut conditioner 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rmangoconditioner1ltr = inventories
          .filter(({ description}) => 
          description ==="mango conditioner 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
  
            const Rgrapefruitconditioner500ml = inventories
            .filter(({ description}) => 
            description ==="grapefruit conditioner 500 ml")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rlimeconditioner500ml = inventories
            .filter(({ description}) => 
            description ==="lime conditioner 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0); 
              const Rcoconutconditioner500ml = inventories
            .filter(({ description}) => 
            description ==="coconut conditioner 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rmangoconditioner500ml = inventories
            .filter(({ description}) => 
            description ==="mango conditioner 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rgrapefruitconditioner280ml = inventories
              .filter(({ description}) => 
              description ==="grapefruit conditioner 280 ML")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Rlimeconditioner280ml = inventories
              .filter(({ description}) => 
              description ==="lime conditioner 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0); 
                const Rcoconutconditioner280ml = inventories
              .filter(({ description}) => 
              description ==="coconut conditioner 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Rmangoconditioner280ml = inventories
              .filter(({ description}) => 
              description ==="mango conditioner 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
      
                
//HAIRFOOD  RECEIVED
const Rhairfood500gms = inventories
        .filter(({ description}) => 
        description ==="hairfood 500gms")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rhairfood200gms = inventories
        .filter(({ description}) => 
        description ==="hairfood 200gms")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rhairfood100gms = inventories
        .filter(({ description}) => 
        description ==="hairfood 100gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rhairfood50gms = inventories
        .filter(({ description}) => 
        description ==="hairfood 50gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
   
   
//POMADE RECEIVED

const Rpomade500gms = inventories
        .filter(({ description}) => 
        description ==="pomade 500gms")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rpomade200gms = inventories
        .filter(({ description}) => 
        description ==="pomade 200gms")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rpomade100gms = inventories
        .filter(({ description}) => 
        description ==="pomade 100gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rpomade50gms = inventories
        .filter(({ description}) => 
        description ==="pomade 50gms")
          .reduce((sum, li) => sum + + li.quantity, 0);



//glyceline received

const Rglyceline500mls = inventories
        .filter(({ description}) => 
        description ==="glyceline 500mls")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Rglyceline200mls = inventories
        .filter(({ description}) => 
        description ==="glyceline 200mls")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rglyceline100mls = inventories
        .filter(({ description}) => 
        description ==="glyceline 100mls")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rglyceline50mls = inventories
        .filter(({ description}) => 
        description ==="glyceline 50mls")
          .reduce((sum, li) => sum + + li.quantity, 0);

//PRODUCTION CHEMICAL RECEIVED

const RRAJOIL = inventories
        .filter(({ description}) => 
        description ==="RAJ OIL")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const RINDUSTRIALSALT = inventories
        .filter(({ description}) => 
        description ==="INDUSTRIAL SALT")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Rmangopurfume = inventories
        .filter(({ description}) => 
        description ==="mango-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rpineapplepurfume = inventories
        .filter(({ description}) => 
        description ==="pineapple-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rstrawberrypurfume = inventories
          .filter(({ description}) => 
          description ==="strawberry-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Rlemonpurfume = inventories
          .filter(({ description}) => 
          description ==="lemon-purfume")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Ryellowcolour = inventories
          .filter(({ description}) => 
          description ==="yellow-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rgreencolour = inventories
          .filter(({ description}) => 
          description ==="green-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Reggcolour = inventories
          .filter(({ description}) => 
          description ==="egg-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rformalin = inventories
          .filter(({ description}) => 
          description ==="formalin")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const RCSA = inventories
          .filter(({ description}) => 
          description ==="CSA")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const RGSS = inventories
          .filter(({ description}) => 
          description ==="GSS")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const RCAS = inventories
          .filter(({ description}) => 
          description ==="CAS")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Rparafinewax = inventories
          .filter(({ description}) => 
          description ==="PARAFINE-WAX")
            .reduce((sum, li) => sum + + li.quantity, 0);

//CONTAINERS RECEIVED 

const R20LTSCONTAINER = inventories
          .filter(({ description}) => 
          description ==="20-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const R5LTSCONTAINER = inventories
          .filter(({ description}) => 
          description ==="5-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const R1LTSCONTAINER = inventories
          .filter(({ description}) => 
          description ==="1-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const R500mlsCONTAINER = inventories
          .filter(({ description}) => 
          description ==="500mls-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const R280mlsCONTAINER = inventories
            .filter(({ description}) => 
            description ==="280mls-CONTAINER")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const R200mlsCONTAINER = inventories
              .filter(({ description}) => 
              description ==="200mls-CONTAINER")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const R100mlsCONTAINER = inventories
                .filter(({ description}) => 
                description ==="100mls-CONTAINER")
                  .reduce((sum, li) => sum + + li.quantity, 0);
                  const R50mlsCONTAINER = inventories
                  .filter(({ description}) => 
                  description ==="50mls-CONTAINER")
                    .reduce((sum, li) => sum + + li.quantity, 0);
                    const R500gmsCONTAINER = inventories
                    .filter(({ description}) => 
                    description ==="500-gms-CONTAINER")
                      .reduce((sum, li) => sum + + li.quantity, 0);
                      const R250gmsCONTAINER = inventories
                      .filter(({ description}) => 
                      description ==="250-gms-CONTAINER")
                        .reduce((sum, li) => sum + + li.quantity, 0);

                        const R200gmsCONTAINER = inventories
                        .filter(({ description}) => 
                        description ==="200-gms-CONTAINER")
                          .reduce((sum, li) => sum + + li.quantity, 0);
                          const R100gmsCONTAINER = inventories
                          .filter(({ description}) => 
                          description ==="100-gms-CONTAINER")
                            .reduce((sum, li) => sum + + li.quantity, 0);
                            const R50gmsCONTAINER = inventories
                            .filter(({ description}) => 
                            description ==="50-gms-CONTAINER")
                              .reduce((sum, li) => sum + + li.quantity, 0);
                              const Rminibox = inventories
                              .filter(({ description}) => 
                              description ==="mini-box")
                                .reduce((sum, li) => sum + + li.quantity, 0);
                                const RMaxbox = inventories
                                .filter(({ description}) => 
                                description ==="Max-box")
                                  .reduce((sum, li) => sum + + li.quantity, 0);
      
//RECEIVED  PRODUCTION-GEAR/EXTRAS
const RGLOVES = inventories
.filter(({ description}) => 
description ==="GLOVES")
  .reduce((sum, li) => sum + + li.quantity, 0); 
  const RNOSEMASKS = inventories
.filter(({ description}) => 
description ==="NOSEMASKS")
  .reduce((sum, li) => sum + + li.quantity, 0);
 

 // dispatches         
          stocks.map(({ quantity}) => quantity);

  
          const Dgrapefruitshampoo20ltr = stocks
          .filter(({ description}) => 
          description ==="grapefruit shampoo 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dlimeshampoo20ltr = stocks
          .filter(({ description}) => 
          description ==="lime shampoo 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Dcoconutshampoo20ltr = stocks
          .filter(({ description}) => 
          description ==="coconut shampoo 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dmangoshampoo20ltr = stocks
          .filter(({ description}) => 
          description ==="mango shampoo 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
           const  Dgrapefruitshampoo5ltr = stocks
          .filter(({ description}) => 
          description ==="grapefruit shampoo 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dlimeshampoo5ltr = stocks
          .filter(({ description}) => 
          description ==="lime shampoo 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Dcoconutshampoo5ltr = stocks
          .filter(({ description}) => 
          description ==="coconut shampoo 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dmangoshampoo5ltr = stocks
          .filter(({ description}) => 
          description ==="mango shampoo 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
  
            const Dgrapefruitshampoo1ltr = stocks
            .filter(({ description}) => 
            description ==="grapefruit shampoo 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dlimeshampoo1ltr = stocks
            .filter(({ description}) => 
            description ==="lime shampoo 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0); 
              const Dcoconutshampoo1ltr = stocks
            .filter(({ description}) => 
            description ==="coconut shampoo 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Dmangoshampoo1ltr = stocks
            .filter(({ description}) => 
            description ==="mango shampoo 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0);
    
              const Dgrapefruitshampoo500ml = stocks
              .filter(({ description}) => 
              description ==="grapefruit shampoo 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Dlimeshampoo500ml = stocks
              .filter(({ description}) => 
              description ==="lime shampoo 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0); 
                const Dcoconutshampoo500ml = stocks
              .filter(({ description}) => 
              description ==="coconut shampoo 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dmangoshampoo500ml = stocks
              .filter(({ description}) => 
              description ==="mango shampoo 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dgrapefruitshampoo280ml = stocks
                .filter(({ description}) => 
                description ==="grapefruit shampoo 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dlimeshampoo280ml = stocks
                .filter(({ description}) => 
                description ==="lime shampoo 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0); 
                  const Dcoconutshampoo280ml = stocks
                .filter(({ description}) => 
                description ==="coconut shampoo 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0);
                  const Dmangoshampoo280ml = stocks
                .filter(({ description}) => 
                description ==="mango shampoo 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0);
        
  //CONDITIONER DISPATCHED
  const Dgrapefruitconditioner20ltr = stocks
          .filter(({ description}) => 
          description ==="grapefruit conditioner 20ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dlimeconditioner20ltr = stocks
          .filter(({ description}) => 
          description ==="lime conditioner 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Dcoconutconditioner20ltr = stocks
          .filter(({ description}) => 
          description ==="coconut conditioner 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dmangoconditioner20ltr = stocks
          .filter(({ description}) => 
          description ==="mango conditioner 20ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
           const  Dgrapefruitconditioner5ltr = stocks
          .filter(({ description}) => 
          description ==="grapefruit conditioner 5 ltr")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dlimeconditioner5ltr = stocks
          .filter(({ description}) => 
          description ==="lime conditioner 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Dcoconutconditioner5ltr = stocks
          .filter(({ description}) => 
          description ==="coconut conditioner 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dmangoconditioner5ltr = stocks
          .filter(({ description}) => 
          description ==="mango conditioner 5 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
  
            const Dgrapefruitconditioner1ltr = stocks
            .filter(({ description}) => 
            description ==="grapefruit conditioner 1 ltr")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dlimeconditioner1ltr = stocks
            .filter(({ description}) => 
            description ==="lime conditioner 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0); 
              const Dcoconutconditioner1ltr = stocks
            .filter(({ description}) => 
            description ==="coconut conditioner 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Dmangoconditioner1ltr = stocks
            .filter(({ description}) => 
            description ==="mango conditioner 1 ltr")
              .reduce((sum, li) => sum + + li.quantity, 0);
    
              const Dgrapefruitconditioner500ml = stocks
              .filter(({ description}) => 
              description ==="grapefruit conditioner 500 ml")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const Dlimeconditioner500ml = stocks
              .filter(({ description}) => 
              description ==="lime conditioner 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0); 
                const Dcoconutconditioner500ml = stocks
              .filter(({ description}) => 
              description ==="coconut conditioner 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dmangoconditioner500ml = stocks
              .filter(({ description}) => 
              description ==="mango conditioner 500 ml")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dgrapefruitconditioner280ml = stocks
                .filter(({ description}) => 
                description ==="grapefruit conditioner 280 ML")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const Dlimeconditioner280ml = stocks
                .filter(({ description}) => 
                description ==="lime conditioner 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0); 
                  const Dcoconutconditioner280ml = stocks
                .filter(({ description}) => 
                description ==="coconut conditioner 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0);
                  const Dmangoconditioner280ml = stocks
                .filter(({ description}) => 
                description ==="mango conditioner 280 ML")
                  .reduce((sum, li) => sum + + li.quantity, 0);
        
  //DISPATCHED
//HAIRFOOD  DISPATCHED
const Dhairfood500gms = stocks
        .filter(({ description}) => 
        description ==="hairfood 500gms")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Dhairfood200gms = stocks
        .filter(({ description}) => 
        description ==="hairfood 200gms")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Dhairfood100gms = stocks
        .filter(({ description}) => 
        description ==="hairfood 100gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dhairfood50gms = stocks
        .filter(({ description}) => 
        description ==="hairfood 50gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
   
   
//POMADE DISPATCHED

const Dpomade500gms = stocks
        .filter(({ description}) => 
        description ==="pomade 500gms")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Dpomade200gms = stocks
        .filter(({ description}) => 
        description ==="pomade 200gms")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Dpomade100gms = stocks
        .filter(({ description}) => 
        description ==="pomade 100gms")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dpomade50gms = stocks
        .filter(({ description}) => 
        description ==="pomade 50gms")
          .reduce((sum, li) => sum + + li.quantity, 0);



//glyceline DISPATCHED

const Dglyceline500mls = stocks
        .filter(({ description}) => 
        description ==="glyceline 500mls")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const Dglyceline200mls = stocks
        .filter(({ description}) => 
        description ==="glyceline 200mls")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Dglyceline100mls = stocks
        .filter(({ description}) => 
        description ==="glyceline 100mls")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dglyceline50mls = stocks
        .filter(({ description}) => 
        description ==="glyceline 50mls")
          .reduce((sum, li) => sum + + li.quantity, 0);

//PRODUCTION CHEMICAL DISPATCHED

const DRAJOIL = stocks
        .filter(({ description}) => 
        description ==="RAJ OIL")
        .reduce((sum, li) => sum + + li.quantity, 0);
        const DINDUSTRIALSALT = stocks
        .filter(({ description}) => 
        description ==="INDUSTRIAL SALT")
          .reduce((sum, li) => sum + + li.quantity, 0); 
          const Dmangopurfume = stocks
        .filter(({ description}) => 
        description ==="mango-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dpineapplepurfume = stocks
        .filter(({ description}) => 
        description ==="pineapple-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dstrawberrypurfume = stocks
          .filter(({ description}) => 
          description ==="strawberry-purfume")
          .reduce((sum, li) => sum + + li.quantity, 0);
          const Dlemonpurfume = stocks
          .filter(({ description}) => 
          description ==="lemon-purfume")
            .reduce((sum, li) => sum + + li.quantity, 0); 
            const Dyellowcolour = stocks
          .filter(({ description}) => 
          description ==="yellow-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dgreencolour = stocks
          .filter(({ description}) => 
          description ==="green-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Deggcolour = stocks
          .filter(({ description}) => 
          description ==="egg-colour")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dformalin = stocks
          .filter(({ description}) => 
          description ==="formalin")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const DCSA = stocks
          .filter(({ description}) => 
          description ==="CSA")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const DGSS = stocks
          .filter(({ description}) => 
          description ==="GSS")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const DCAS = stocks
          .filter(({ description}) => 
          description ==="CAS")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const Dparafinewax = stocks
          .filter(({ description}) => 
          description ==="PARAFINE-WAX")
            .reduce((sum, li) => sum + + li.quantity, 0);

//CONTAINERS DISPACHED 

const D20LTSCONTAINER = stocks
          .filter(({ description}) => 
          description ==="20-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const D5LTSCONTAINER = stocks
          .filter(({ description}) => 
          description ==="5-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const D1LTSCONTAINER = stocks
          .filter(({ description}) => 
          description ==="1-LTS-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const D500mlsCONTAINER = stocks
          .filter(({ description}) => 
          description ==="500mls-CONTAINER")
            .reduce((sum, li) => sum + + li.quantity, 0);
            const D280mlsCONTAINER = stocks
            .filter(({ description}) => 
            description ==="280mls-CONTAINER")
              .reduce((sum, li) => sum + + li.quantity, 0);
              const D200mlsCONTAINER = stocks
              .filter(({ description}) => 
              description ==="200mls-CONTAINER")
                .reduce((sum, li) => sum + + li.quantity, 0);
                const D100mlsCONTAINER = stocks
                .filter(({description}) => 
                description ==="100mls-CONTAINER")
                  .reduce((sum, li) => sum + + li.quantity, 0);
                  const D50mlsCONTAINER = stocks
                  .filter(({ description}) => 
                  description ==="50mls-CONTAINER")
                    .reduce((sum, li) => sum + + li.quantity, 0);
                    const D500gmsCONTAINER = stocks
                    .filter(({ description}) => 
                    description ==="500-gms-CONTAINER")
                      .reduce((sum, li) => sum + + li.quantity, 0);
                      const D250gmsCONTAINER = stocks
                      .filter(({ description}) => 
                      description ==="250-gms-CONTAINER")
                        .reduce((sum, li) => sum + + li.quantity, 0);

                        const D200gmsCONTAINER = stocks
                        .filter(({ description}) => 
                        description ==="200-gms-CONTAINER")
                          .reduce((sum, li) => sum + + li.quantity, 0);
                          const D100gmsCONTAINER = stocks
                          .filter(({ description}) => 
                          description ==="100-gms-CONTAINER")
                            .reduce((sum, li) => sum + + li.quantity, 0);
                            const D50gmsCONTAINER = stocks
                            .filter(({ description}) => 
                            description ==="50-gms-CONTAINER")
                              .reduce((sum, li) => sum + + li.quantity, 0);
                              const Dminibox = stocks
                              .filter(({ description}) => 
                              description ==="mini-box")
                                .reduce((sum, li) => sum + + li.quantity, 0);
                                const DMaxbox = stocks
                                .filter(({ description}) => 
                                description ==="Max-box")
                                  .reduce((sum, li) => sum + + li.quantity, 0);
      
//DISPATCHED   PRODUCTION-GEAR/EXTRAS
const DGLOVES = stocks
.filter(({ description}) => 
description ==="GLOVES")
  .reduce((sum, li) => sum + + li.quantity, 0); 
  const DNOSEMASKS = stocks
.filter(({ description}) => 
description ==="NOSEMASKS")
  .reduce((sum, li) => sum + + li.quantity, 0);
  

  
       <div> 
        {this.state.description==="grapefruit shampoo 20ltr"?(<> { maxquantity= Rgrapefruitshampoo20ltr-Dgrapefruitshampoo20ltr}</>):null}
        {this.state.description==="lime shampoo 20ltr"?(<> { maxquantity= Rlimeshampoo20ltr-Dlimeshampoo20ltr}</>):null}
        {this.state.description==="coconut shampoo 20ltr"?(<> { maxquantity= Rcoconutshampoo20ltr-Dcoconutshampoo20ltr}</>):null}
        {this.state.description==="mango shampoo 20ltr"?(<> { maxquantity= Rmangoshampoo20ltr-Dmangoshampoo20ltr}</>):null}
        {this.state.description==="grapefruit shampoo 5 ltr"?(<> { maxquantity= Rgrapefruitshampoo5ltr-Dgrapefruitshampoo5ltr}</>):null}
        {this.state.description==="lime shampoo 5 ltr"?(<> { maxquantity= Rlimeshampoo5ltr-Dlimeshampoo5ltr}</>):null}
        {this.state.description==="coconut shampoo 5 ltr"?(<> { maxquantity= Rcoconutshampoo5ltr-Dcoconutshampoo5ltr}</>):null}
        {this.state.description==="mango shampoo 5 ltr"?(<> { maxquantity= Rmangoshampoo5ltr-Dmangoshampoo5ltr}</>):null}
        {this.state.description==="grapefruit shampoo 1 ltr"?(<> { maxquantity= Rgrapefruitshampoo1ltr-Dgrapefruitshampoo1ltr}</>):null}
        {this.state.description==="lime shampoo 1 ltr"?(<> { maxquantity= Rlimeshampoo1ltr-Dlimeshampoo1ltr}</>):null}
        {this.state.description==="coconut shampoo 1 ltr"?(<> { maxquantity= Rcoconutshampoo1ltr-Dcoconutshampoo1ltr}</>):null}
        {this.state.description==="mango shampoo 1 ltr"?(<> { maxquantity= Rmangoshampoo1ltr-Dmangoshampoo1ltr}</>):null}
        {this.state.description==="grapefruit shampoo 500 ml"?(<> { maxquantity= Rgrapefruitshampoo500ml-Dgrapefruitshampoo500ml}</>):null}
        {this.state.description==="lime shampoo 500 ml"?(<> { maxquantity= Rlimeshampoo500ml-Dlimeshampoo500ml}</>):null}
        {this.state.description==="coconut shampoo 500 ml"?(<> { maxquantity= Rcoconutshampoo500ml-Dcoconutshampoo500ml}</>):null}
        {this.state.description==="mango shampoo 500 ml"?(<> { maxquantity= Rmangoshampoo500ml-Dmangoshampoo500ml}</>):null}
        {this.state.description==="grapefruit shampoo 280 ML"?(<> { maxquantity= Rgrapefruitshampoo280ml-Dgrapefruitshampoo280ml}</>):null}
        {this.state.description==="lime shampoo 280 ML"?(<> { maxquantity= Rlimeshampoo280ml-Dlimeshampoo280ml}</>):null}
        {this.state.description==="coconut shampoo 280 ML"?(<> { maxquantity= Rcoconutshampoo280ml-Dcoconutshampoo280ml}</>):null}
        {this.state.description==="mango shampoo 280 ML"?(<> { maxquantity= Rmangoshampoo280ml-Dmangoshampoo280ml}</>):null}
       
        {this.state.description==="grapefruit conditioner 20ltr"?(<> { maxquantity= Rgrapefruitconditioner20ltr-Dgrapefruitconditioner20ltr}</>):null}
{this.state.description==="lime conditioner 20ltr"?(<> { maxquantity= Rlimeconditioner20ltr-Dlimeconditioner20ltr}</>):null}
{this.state.description==="coconut conditioner 20ltr"?(<> { maxquantity= Rcoconutconditioner20ltr-Dcoconutconditioner20ltr}</>):null}
{this.state.description==="mango conditioner 20ltr"?(<> { maxquantity= Rmangoconditioner20ltr-Dmangoconditioner20ltr}</>):null}
{this.state.description==="grapefruit conditioner 5 ltr"?(<> { maxquantity= Rgrapefruitconditioner5ltr-Dgrapefruitconditioner5ltr}</>):null}
{this.state.description==="lime conditioner 5 ltr"?(<> { maxquantity= Rlimeconditioner5ltr-Dlimeconditioner5ltr}</>):null}
{this.state.description==="coconut conditioner 5 ltr"?(<> { maxquantity= Rcoconutconditioner5ltr-Dcoconutconditioner5ltr}</>):null}
{this.state.description==="mango conditioner 5 ltr"?(<> { maxquantity= Rmangoconditioner5ltr-Dmangoconditioner5ltr}</>):null}
{this.state.description==="grapefruit conditioner 1 ltr"?(<> { maxquantity= Rgrapefruitconditioner1ltr-Dgrapefruitconditioner1ltr}</>):null}
{this.state.description==="lime conditioner 1 ltr"?(<> { maxquantity= Rlimeconditioner1ltr-Dlimeconditioner1ltr}</>):null}
{this.state.description==="coconut conditioner 1 ltr"?(<> { maxquantity= Rcoconutconditioner1ltr-Dcoconutconditioner1ltr}</>):null}
{this.state.description==="mango conditioner 1 ltr"?(<> { maxquantity= Rmangoconditioner1ltr-Dmangoconditioner1ltr}</>):null}
{this.state.description==="grapefruit conditioner 500 ml"?(<> { maxquantity= Rgrapefruitconditioner500ml-Dgrapefruitconditioner500ml}</>):null}
{this.state.description==="lime conditioner 500 ml"?(<> { maxquantity= Rlimeconditioner500ml-Dlimeconditioner500ml}</>):null}
{this.state.description==="coconut conditioner 500 ml"?(<> { maxquantity= Rcoconutconditioner500ml-Dcoconutconditioner500ml}</>):null}
{this.state.description==="mango conditioner 500 ml"?(<> { maxquantity= Rmangoconditioner500ml-Dmangoconditioner500ml}</>):null}
{this.state.description==="grapefruit conditioner 280 ML"?(<> { maxquantity= Rgrapefruitconditioner280ml-Dgrapefruitconditioner280ml}</>):null}
{this.state.description==="lime conditioner 280 ML"?(<> { maxquantity= Rlimeconditioner280ml-Dlimeconditioner280ml}</>):null}
{this.state.description==="coconut conditioner 280 ML"?(<> { maxquantity= Rcoconutconditioner280ml-Dcoconutconditioner280ml}</>):null}
{this.state.description==="mango conditioner 280 ML"?(<> { maxquantity= Rmangoconditioner280ml-Dmangoconditioner280ml}</>):null}

{this.state.description==="hairfood 500gms"?(<> { maxquantity= Rhairfood500gms-Dhairfood500gms}</>):null}
{this.state.description==="hairfood 200gms"?(<> { maxquantity= Rhairfood200gms-Dhairfood200gms}</>):null}
{this.state.description==="hairfood 100gms"?(<> { maxquantity= Rhairfood100gms-Dhairfood100gms}</>):null}
{this.state.description==="hairfood 50gms"?(<> { maxquantity= Rhairfood50gms-Dhairfood50gms}</>):null}

{this.state.description==="pomade 500gms"?(<> { maxquantity= Rpomade500gms-Dpomade500gms}</>):null}
{this.state.description==="pomade 200gms"?(<> { maxquantity= Rpomade200gms-Dpomade200gms}</>):null}
{this.state.description==="pomade 100gms"?(<> { maxquantity= Rpomade100gms-Dpomade100gms}</>):null}
{this.state.description==="pomade 50gms"?(<> { maxquantity= Rpomade50gms-Dpomade50gms}</>):null}

{this.state.description==="glyceline 500mls"?(<> { maxquantity= Rglyceline500mls-Dglyceline500mls}</>):null}
{this.state.description==="glyceline 200mls"?(<> { maxquantity= Rglyceline200mls-Dglyceline200mls}</>):null}
{this.state.description==="glyceline 100mls"?(<> { maxquantity= Rglyceline100mls-Dglyceline100mls}</>):null}
{this.state.description==="glyceline 50mls"?(<> { maxquantity= Rglyceline50mls-Dglyceline50mls}</>):null}

{this.state.description==="RAJ OIL"?(<> { maxquantity= RRAJOIL-DRAJOIL}</>):null}
{this.state.description==="INDUSTRIAL SALT"?(<> { maxquantity= RINDUSTRIALSALT-DINDUSTRIALSALT}</>):null}
{this.state.description==="mango-purfume"?(<> { maxquantity= Rmangopurfume-Dmangopurfume}</>):null}
{this.state.description==="pineapple-purfume"?(<> { maxquantity= Rpineapplepurfume-Dpineapplepurfume}</>):null}
{this.state.description==="strawberry-purfume"?(<> { maxquantity= Rstrawberrypurfume-Dstrawberrypurfume}</>):null}
{this.state.description==="lemon-purfume"?(<> { maxquantity= Rlemonpurfume-Dlemonpurfume}</>):null}
{this.state.description==="yellow-colour"?(<> { maxquantity= Ryellowcolour-Dyellowcolour}</>):null}
{this.state.description==="green-colour"?(<> { maxquantity= Rgreencolour-Dgreencolour}</>):null}
{this.state.description==="egg-colour"?(<> { maxquantity= Reggcolour-Deggcolour}</>):null}
{this.state.description==="formalin"?(<> { maxquantity= Rformalin-Dformalin}</>):null}
{this.state.description==="CSA"?(<> { maxquantity= RCSA-DCSA}</>):null}
{this.state.description==="GSS"?(<> { maxquantity= RGSS-DGSS}</>):null}
{this.state.description==="CAS"?(<> { maxquantity= RCAS-DCAS}</>):null}
{this.state.description==="PARAFINE-WAX"?(<> { maxquantity= Rparafinewax-Dparafinewax}</>):null}


{this.state.description==="20-LTS-CONTAINER"?(<> { maxquantity= R20LTSCONTAINER-D20LTSCONTAINER}</>):null}
{this.state.description==="5-LTS-CONTAINER"?(<> { maxquantity= R5LTSCONTAINER-D5LTSCONTAINER}</>):null}
{this.state.description==="1-LTS-CONTAINER"?(<> { maxquantity= R1LTSCONTAINER-D1LTSCONTAINER}</>):null}
{this.state.description==="500mls-CONTAINER"?(<> { maxquantity= R500mlsCONTAINER-D500mlsCONTAINER}</>):null}
{this.state.description==="280mls-CONTAINER"?(<> { maxquantity= R280mlsCONTAINER-D280mlsCONTAINER}</>):null}
{this.state.description==="200mls-CONTAINER"?(<> { maxquantity= R200mlsCONTAINER-D200mlsCONTAINER}</>):null}
{this.state.description==="100mls-CONTAINER"?(<> { maxquantity= R100mlsCONTAINER-D100mlsCONTAINER}</>):null}
{this.state.description==="50mls-CONTAINER"?(<> { maxquantity= R50mlsCONTAINER-D50mlsCONTAINER}</>):null}
{this.state.description==="500gms-CONTAINER"?(<> { maxquantity= R500gmsCONTAINER-D500gmsCONTAINER}</>):null}
{this.state.description==="250gms-CONTAINER"?(<> { maxquantity= R250gmsCONTAINER-D250gmsCONTAINER}</>):null}
{this.state.description==="200gms-CONTAINER"?(<> { maxquantity= R200gmsCONTAINER-D200gmsCONTAINER}</>):null}
{this.state.description==="100gms-CONTAINER"?(<> { maxquantity= R100gmsCONTAINER-D100gmsCONTAINER}</>):null}
{this.state.description==="50gms-CONTAINER"?(<> { maxquantity= R50gmsCONTAINER-D50gmsCONTAINER}</>):null}
{this.state.description==="mini-box"?(<> { maxquantity= Rminibox-Dminibox}</>):null}
{this.state.description==="Max-box"?(<> { maxquantity= RMaxbox-DMaxbox}</>):null}

{this.state.description==="GLOVES"?(<> { maxquantity= RGLOVES-DGLOVES}</>):null}
{this.state.description==="NOSEMASKS"?(<> { maxquantity= RNOSEMASKS-DNOSEMASKS}</>):null}










       
       
       
       
       
       
       
       
       
       
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
     <div>{  
      employee && employee.role==="STORE KEEPER" ? (
        <Button
          color="dark"
          
          onClick={this.toggle}
          
        >
          DISPATCH INVENTORY 
        </Button>):null}
        <Modal
            isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add product details to dispatch inventory.
            </ModalHeader>
            <ModalBody>
                {this.state.msg ? 
                ( <Alert  color='danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                    <Label for="Email"> Receiver Email</Label>
                        <Input
                        type="email"
                        name="email"
                        className='mb-3'
                        required
                        id="email"
                        placeholder="add Receiver Email"
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
        
         
      
                         <Label for="name">QUANTITY</Label>
                        <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        required
                        className='mb-3'
                        min={0} max={maxquantity}  
                        placeholder={maxquantity}     
                        onChange={this.onChange}
                        />
                        
                        
                        <Button color ="dark"
                        style={{marginTop:'2rem'}} autocomplete="off" block>
                            DISPATCH INVENTORY
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
    error:state.error,
    auth: state.auth,
    Inventory:state.Inventory,
    Dispatch:state.Dispatch,
    Stock:state.Stock
});
export default connect(mapStateToProps,{addstock,clearErrors})(DispatchModal);