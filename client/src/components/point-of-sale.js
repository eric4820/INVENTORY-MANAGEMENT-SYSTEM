import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';
import supplier from '../components/supplier';
import ItemModal from '../components/auth/ItemModal';
import DispatchModal from '../components/dispatchmodal';

const InventoryPOS = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { employee } = auth;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='menus'>
      <Router>
        <div className='sidebar'>
          {employee && employee.role === 'STORE KEEPER' ? (
            <Navbar  >
              <ul>
            <li><Link  to='/RECEIVE'>RECEIVE ITEMS</Link></li> 
            <li><Link to='/DISPATCH'>DISPATCH ITEMS</Link> </li>
            </ul>
            </Navbar>
          ) : null}
        </div>

        <Switch>
          <Route path='/RECEIVE' exact component={ItemModal} />
          <Route path='/DISPATCH' exact component={DispatchModal} />
        </Switch>
      </Router>
    </div>
  );
};

InventoryPOS.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(InventoryPOS);
