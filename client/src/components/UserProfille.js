import React, { Component } from 'react';
import Image from "../IMAGES/bty.jpg";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class UserProfile extends Component {
          
                
                
                render() {
                    const {employee}=this.props.auth;
                    const {supplier}=this.props.pauth;
       return ( <div> 
        {
              !employee && !supplier ? ( <div style={{color:'purple', backgroundImage: 'url(' + Image + ')',
                       
              width:'1265px',
              height:'534px' }}>
                  
<h1>WELCOME </h1>  
<h1> LOGIN OR REGISTER TO ACCESS SYSTEM REASOURCES</h1>  


<h1>MISSION </h1>
<h3>We are committed to providing value to our customers by sourcing and using all desirable ingredients to create high quality beauty solutions.</h3>

<h1> VISION</h1>


<h3>To restore and lavish skin and hair using best ingreadients to inspire confidence and prosperity. </h3>

                 
               </div>)
                   : (null
              )
          } 
          
          </div>
      );  
    }
    
    
    
}
const mapStateToProps=state=>({
    pauth: state.pauth,
    auth: state.auth,
})
export default connect(mapStateToProps,null) (UserProfile);