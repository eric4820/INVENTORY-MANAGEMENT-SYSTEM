import React, { Component } from 'react';

 

import 'bootstrap/dist/css/bootstrap.min.css'


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getstock,deletestock} from '../actions/Stockactions';
class Dispatch extends Component {
    state = {
        stock: [],


    } 
    static propTypes={
        getdispatch : PropTypes.func.isRequired,
        deletedispatch: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        Dispatch: PropTypes.object.isRequired,
        
    }
    toggle=()=>{
      
   this.setState({
     table:!this.state.table
   });
  } 
  componentDidMount() {  
    this.props.getstock()
}
onDeleteClick = id => {
    this.props.deletestock(id);
};
    render() {
const {employee}=this.props.auth;
const { stocks } = this.props.Stock;    

        return (  <div> 
          {
                employee && employee.role==="MANAGER"? ( <div className = "container"
                    style = {
                        { marginTop: 50 } } >
 {<h3>DISPATCHED INVENTORY REPORT</h3>}
                    <table className = "table" >
                   
                    <thead>
                       
                    <tr>  
                    
                    <th scope = "col" > ID </th> 
                    <th scope = "col" > EMAIL </th> 
                    <th scope = "col" > PRODUCT </th> 
                    <th scope = "col" > DESCRIPTION</th> 
                   
                    <th scope = "col" > QUANTITY </th> 
                   
                    <th scope = "col" > DELETE </th> 
                    </tr> 
                   </thead> 
                   <tbody>
            {stocks.map(({ _id,email, product,description,quantity,priceperunit}) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{email}</td>
                
                <td>{product}</td>
                <td>{description}</td>
                 
                <td>{quantity}</td>
               
                <td>
                  <button
                    onClick={ this.onDeleteClick.bind(this, _id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
                   
                     </table>
                     
                     </div>)
                     : (null
                )
            } 
            </div>
        );
    }
}

Dispatch.propTypes = {
    getdispatch : PropTypes.func.isRequired,
    deletedispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    Dispatch: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    pauth: state.pauth,
    auth: state.auth,
    Dispatch:state.Inventory,
    Stock:state.Stock,
});
export default connect(mapStateToProps, { getstock,deletestock})(Dispatch);