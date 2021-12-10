import React, { Component } from 'react';



import 'bootstrap/dist/css/bootstrap.min.css'


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addsupplier, getsuppliers, deletesupplier } from '../actions/supplieraction';
class supplier extends Component {
    state = {
        supplier: []



    }
 static propTypes={
  getsuppliers: PropTypes.func.isRequired,
  pauth: PropTypes.object.isRequired,
        auth:PropTypes.object.isRequired
        
    }
    componentDidMount() {
        this.props.getsuppliers()
    }
    onDeleteClick = id => {
        this.props.deletesupplier(id);
    };
    render() {
const {employee}=this.props.auth;
        const { suppliers } = this.props.pauth;  
        return ( <div> {
        employee && employee.role==="MANAGER"? ( <div className = "container"
                    style = {
                        { marginTop: 50 } } >
                 {<h3>SUPPLIERS  TABLE</h3>}
                    <table className = "table" >
                   
                    <thead>
                   
                    <tr> 
                    
                    <th scope = "col" > ID </th> 
                    <th scope = "col" > EMAIL </th> 
                    <th scope = "col" > USERNAME </th> 
                    <th scope = "col" > LOCATION</th> 
                   
                    <th scope = "col" > DELETE </th> 
                    </tr> 
                   </thead> 
                   <tbody>
            {suppliers.map(({ _id, name,email, location }) => (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{location}</td>
                
                
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

supplier.propTypes = {
    getsuppliers: PropTypes.func.isRequired,
    pauth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    pauth: state.pauth,
    auth: state.auth,
    
});
export default connect(mapStateToProps, { getsuppliers, deletesupplier, addsupplier })(supplier);