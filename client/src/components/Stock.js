import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getstock,deletestock } from '../actions/Stockactions';
import { getItems } from '../actions/Inventoryaction';
class Stock extends Component {
    state = {
        inventory: [],
stock:[]

  
    } 
 static propTypes={
        getItems: PropTypes.func.isRequired,
        deleteInventory: PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired,
        Inventory:PropTypes.object.isRequired
        
    }
    componentDidMount() {
        this.props.getstock()
    }
    onDeleteClick = id => {
        this.props.deletestock(id);
    };
    render() {
const {employee}=this.props.auth;
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
  

  
        return ( <div> {
          employee && employee.role==="MANAGER" ? ( <div >
<h2> SALES STOCK LEVELS </h2 >
<div className = "receive" >
<div className = "available-stock">
<table className = "table" >
                   
                   <thead>
                      
                   <tr>  
                   
                   <th scope = "row" > GRAPEFRUIT SHAMPOO 20 LTR </th> 
                   <th scope = "row" > LIME SHAMPOO 20 LTR </th> 
                   <th scope = "row" > COCONUT SHAMPOO 20 LTR </th> 
                   <th scope = "row" > MANGO SHAMPOO 20 LTR </th> 
                   <th scope = "row" > GRAPEFRUIT SHAMPOO   5 LTR </th> 
                   <th scope = "row" > LIME SHAMPOO 5 LTR </th> 
                   <th scope = "row" > COCONUT SHAMPOO 5 LTR </th> 
                   <th scope = "row" > MANGO SHAMPOO 5  LTR </th> 
                   <th scope = "row" > GRAPEFRUIT SHAMPOO      1  LTR </th> 
                   <th scope = "row" > LIME SHAMPOO 1 LTR </th> 
                   <th scope = "row" > COCONUT SHAMPOO 1 LTR </th> 
                   <th scope = "row" > MANGO SHAMPOO 1 LTR </th> 
                   <th scope = "row" > GRAPEFRUIT SHAMPOO    500 mls </th> 
                   <th scope = "row" > LIME SHAMPOO 500 mls </th> 
                   <th scope = "row" > COCONUT SHAMPOO 500 mls </th> 
                   <th scope = "row" > MANGO SHAMPOO 500 mls </th> 
                   <th scope = "row" > GRAPEFRUIT SHAMPOO    280 mls </th> 
                   <th scope = "row" > LIME SHAMPOO 280 mls </th> 
                   <th scope = "row" > COCONUT SHAMPOO 280 mls </th> 
                   <th scope = "row" > MANGO SHAMPOO 280 mls </th> 

                   <th scope = "row" > GRAPEFRUIT CONDITIONER 20 LTR </th> 
                   <th scope = "row" > LIME CONDITIONER 20 LTR </th> 
                   <th scope = "row" > COCONUT CONDITIONER 20 LTR </th> 
                   <th scope = "row" > MANGO CONDITIONER 20 LTR </th> 
                   <th scope = "row" > GRAPEFRUIT CONDITIONER   5 LTR </th> 
                   <th scope = "row" > LIME CONDITIONER 5 LTR </th> 
                   <th scope = "row" > COCONUT CONDITIONER 5 LTR </th> 
                   <th scope = "row" > MANGO CONDITIONER 5  LTR </th> 
                   <th scope = "row" > GRAPEFRUIT CONDITIONER      1  LTR </th> 
                   <th scope = "row" > LIME CONDITIONER 1 LTR </th> 
                   <th scope = "row" > COCONUT CONDITIONER 1 LTR </th> 
                   <th scope = "row" > MANGO  CONDITIONER 1 LTR </th> 
                   <th scope = "row" > GRAPEFRUIT CONDITIONER    500 mls </th> 
                   <th scope = "row" > LIME CONDITIONER 500 mls </th> 
                   <th scope = "row" > COCONUT CONDITIONER 500 mls </th> 
                   <th scope = "row" > MANGO CONDITIONER 500 mls </th> 
                   <th scope = "row" > GRAPEFRUIT CONDITIONER    280 mls </th> 
                   <th scope = "row" > LIME CONDITIONER 280 mls </th> 
                   <th scope = "row" > COCONUT CONDITIONER 280 mls </th> 
                   <th scope = "row" > MANGO CONDITIONER 280 mls </th> 
                  
                   <th scope = "row" > HAIRFOOD   500 gms </th> 
                   <th scope = "row" > HAIRFOOD 200 gms </th> 
                   <th scope = "row" > HAIRFOOD 100 gms </th> 
                   <th scope = "row" > HAIRFOOD 50 gms</th> 
                   <th scope = "row" > POMADE 500 gms </th> 
                   <th scope = "row" > POMADE 200 gms </th> 
                   <th scope = "row" > POMADE 100 gms</th> 
                   <th scope = "row" > POMADE 50 gms </th> 
                  
  
                   <th scope = "row" > GLYCELINE 500 mls </th> 
                   <th scope = "row" > GLYCELINE 200 mls  </th> 
                   <th scope = "row" > GLYCELINE 100 mls </th> 
                   <th scope = "row" > GLYCELINE 50 mls  </th> 
                   </tr> 
                  </thead> 
                  <tbody>
          <tr >
              
               <td>{Rgrapefruitshampoo20ltr-Dgrapefruitshampoo20ltr}</td>
               <td>{Rlimeshampoo20ltr-Dlimeshampoo20ltr}</td>
               <td>{Rcoconutshampoo20ltr-Dcoconutshampoo20ltr}</td>
               <td>{Rmangoshampoo20ltr-Dmangoshampoo20ltr}</td>
               <td>{Rgrapefruitshampoo5ltr-Dgrapefruitshampoo5ltr}</td>
               <td>{Rlimeshampoo5ltr-Dlimeshampoo5ltr}</td>
               <td>{Rcoconutshampoo5ltr-Dcoconutshampoo5ltr}</td>
               <td>{Rmangoshampoo5ltr-Dmangoshampoo5ltr}</td>
               <td>{Rgrapefruitshampoo1ltr-Dgrapefruitshampoo1ltr}</td>
               <td>{Rlimeshampoo1ltr-Dlimeshampoo1ltr}</td>
               <td>{Rcoconutshampoo1ltr-Dcoconutshampoo1ltr}</td>
               <td>{Rmangoshampoo1ltr-Dmangoshampoo1ltr}</td>
               <td>{Rgrapefruitshampoo500ml-Dgrapefruitshampoo500ml}</td>
               <td>{Rlimeshampoo500ml-Dlimeshampoo500ml}</td>
               <td>{Rcoconutshampoo500ml-Dcoconutshampoo500ml}</td>
               <td>{Rmangoshampoo500ml-Dmangoshampoo500ml}</td>
               <td>{Rgrapefruitshampoo280ml-Dgrapefruitshampoo280ml}</td>
               <td>{Rlimeshampoo280ml-Dlimeshampoo280ml}</td>
               <td>{Rcoconutshampoo280ml-Dcoconutshampoo280ml}</td>
               <td>{Rmangoshampoo280ml-Dmangoshampoo280ml}</td>
               <td>{Rgrapefruitconditioner20ltr-Dgrapefruitconditioner20ltr}</td>
               <td>{Rlimeconditioner20ltr-Dlimeconditioner20ltr}</td>
               <td>{Rcoconutconditioner20ltr-Dcoconutconditioner20ltr}</td>
               <td>{Rmangoconditioner20ltr-Dmangoconditioner20ltr}</td>
               <td>{Rgrapefruitconditioner5ltr-Dgrapefruitconditioner5ltr}</td>
               <td>{Rlimeconditioner5ltr-Dlimeconditioner5ltr}</td>
               <td>{Rcoconutconditioner5ltr-Dcoconutconditioner5ltr}</td>
               <td>{Rmangoconditioner5ltr-Dmangoconditioner5ltr}</td>
               <td>{Rgrapefruitconditioner1ltr-Dgrapefruitconditioner1ltr}</td>
               <td>{Rlimeconditioner1ltr-Dlimeconditioner1ltr}</td>
               <td>{Rcoconutconditioner1ltr-Dcoconutconditioner1ltr}</td>
               <td>{Rmangoconditioner1ltr-Dmangoconditioner1ltr}</td>

               <td>{Rgrapefruitconditioner500ml-Dgrapefruitconditioner500ml}</td>
               <td>{Rlimeconditioner500ml-Dlimeconditioner500ml}</td>
               <td>{Rcoconutconditioner500ml-Dcoconutconditioner500ml}</td>
               <td>{Rmangoconditioner500ml-Dmangoconditioner500ml}</td>
               <td>{Rgrapefruitconditioner280ml-Dgrapefruitconditioner280ml}</td>
               <td>{Rlimeconditioner280ml-Dlimeconditioner280ml}</td>
               <td>{Rcoconutconditioner280ml-Dcoconutconditioner280ml}</td>
               <td>{Rmangoconditioner280ml-Dmangoconditioner280ml}</td>
  
        
         <td>{Rhairfood500gms-Dhairfood500gms}</td>
               <td>{Rhairfood200gms-Dhairfood200gms}</td>
               <td>{Rhairfood100gms-Dhairfood100gms}</td>
               <td>{Rhairfood50gms-Dhairfood50gms}</td>
  

  
               <td>{Rpomade500gms-Dpomade500gms}</td>
               <td>{Rpomade200gms-Dpomade200gms}</td>
               <td>{Rpomade100gms-Dpomade100gms}</td>
               <td>{Rpomade50gms-Dpomade50gms}</td>
  

 
  <td>{Rglyceline500mls-Dglyceline500mls}</td>
               <td>{Rglyceline200mls-Dglyceline200mls}</td>
               <td>{Rglyceline100mls-Dglyceline100mls}</td>
               <td>{Rglyceline50mls-Dglyceline50mls}</td>




          </tr>
          
         </tbody>
                  
                    </table>
                
             </div>
             
             </div>
             <h2> PRODUCTION STOCK LEVELS </h2 >
<div className = "receive" >
<div className = "available-stock">
<table className = "table" >
                   
                   <thead>
                      
                   <tr>  
                   
                   <th scope = "row" > RAJ OIL </th> 
                   <th scope = "row" > INDUSTRIAL SALT </th> 
                   <th scope = "row" > MANGO PERFUME</th> 
                   <th scope = "row" > PINEAPPLE PERFUME </th> 
                   <th scope = "row" > STRAWBERRY PERFUME </th> 
                   <th scope = "row" > LEMON PERFUME </th> 
                   <th scope = "row" > YELLOW COLOUR</th> 
                   <th scope = "row" > GREEN COLOUR </th> 
                   <th scope = "row" > EGG COLOUR </th> 
                   <th scope = "row" > FORMALIN </th> 
                   <th scope = "row" > CSA </th> 
                   <th scope = "row" > GSS </th> 
                   <th scope = "row" > CAS </th> 
                   <th scope = "row" > PARAFINE WAX </th> 
                   <th scope = "row" > 20-LTS-CONTAINER </th> 
                   <th scope = "row" > 5-LTS-CONTAINER </th> 
                   <th scope = "row" > 1-LTS-CONTAINER </th> 
                   <th scope = "row" > 500mls-CONTAINER </th> 
                   <th scope = "row" > 280mls-CONTAINER </th> 
                   <th scope = "row" > 200mls-CONTAINER </th> 

                   <th scope = "row" > 100mls-CONTAINER </th> 
                   <th scope = "row" > 50mls-CONTAINER </th> 
                   <th scope = "row" > 500-gms-CONTAINER </th> 
                   <th scope = "row" > 250-gms-CONTAINER </th> 
                   <th scope = "row" > 200-gms-CONTAINER </th> 
                   <th scope = "row" > 100-gms-CONTAINER</th> 
                   <th scope = "row" > 50-gms-CONTAINER </th> 
                   <th scope = "row" > MINI-BOX</th> 
                   <th scope = "row" > MAX  - BOX </th> 
                   <th scope = "row" > GLOVES </th> 
                   <th scope = "row" > NOSEMASKS </th> 
                    </tr> 
                  </thead> 
                  <tbody>
          <tr >
              
               <td>{RRAJOIL-DRAJOIL}</td>
               <td>{RINDUSTRIALSALT-DINDUSTRIALSALT}</td>
               <td>{Rmangopurfume-Dmangopurfume}</td>
               <td>{Rpineapplepurfume-Dpineapplepurfume}</td>
               <td>{Rstrawberrypurfume-Dstrawberrypurfume}</td>
               <td>{Rlemonpurfume-Dlemonpurfume}</td>
               <td>{Ryellowcolour-Dyellowcolour}</td>
               <td>{Rgreencolour-Dgreencolour}</td>
               <td>{Reggcolour-Deggcolour}</td>
               <td>{Rformalin-Dformalin}</td>
               <td>{RCSA-DCSA}</td>
               <td>{RGSS-DGSS}</td>
               <td>{RCAS-DCAS}</td>
               <td>{Rparafinewax-Dparafinewax}</td>

               <td>{R20LTSCONTAINER-D20LTSCONTAINER}</td>
               <td>{R5LTSCONTAINER-D5LTSCONTAINER}</td>
               <td>{R1LTSCONTAINER-D1LTSCONTAINER}</td>
               <td>{R500mlsCONTAINER-D500mlsCONTAINER}</td>
               <td>{R280mlsCONTAINER-D280mlsCONTAINER}</td>
               <td>{R200mlsCONTAINER-D200mlsCONTAINER}</td>
               <td>{R100mlsCONTAINER-D100mlsCONTAINER}</td>
               <td>{R50mlsCONTAINER-D50mlsCONTAINER}</td>
               <td>{R500gmsCONTAINER-D500gmsCONTAINER}</td>
               <td>{R250gmsCONTAINER-D250gmsCONTAINER}</td>
               <td>{R200gmsCONTAINER-D200gmsCONTAINER}</td>
               <td>{R100gmsCONTAINER-D100gmsCONTAINER}</td>
               <td>{R50gmsCONTAINER-D50gmsCONTAINER}</td>
               <td>{Rminibox-Dminibox}</td>
               <td>{RMaxbox-DMaxbox}</td>
               
               <td>{RGLOVES-DGLOVES}</td>
               <td>{RNOSEMASKS-DNOSEMASKS}</td> 

          </tr>
          
         </tbody>
                  
                    </table>
                
             </div>
             
             </div>
                     </div>)
                     : (null
                )
            } 
            </div>
        );
    }
}
  
Stock.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteInventory: PropTypes.func.isRequired,
    pauth: PropTypes.object.isRequired,
    Inventory: PropTypes.object.isRequired,
    Stock: PropTypes.object.isRequired,
    deletestock: PropTypes.func.isRequired,
    getstock: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    pauth: state.pauth,
    auth: state.auth,
    Inventory:state.Inventory,
    Stock:state.Stock,
});
export default connect(mapStateToProps, { getItems,getstock,deletestock})(Stock);