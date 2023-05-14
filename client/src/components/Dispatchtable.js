import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getstock, deletestock } from '../actions/Stockactions';

import 'bootstrap/dist/css/bootstrap.min.css';

const Dispatch = ({ getstock, deletestock, auth, Stock }) => {
  const [table, setTable] = useState(false);

  useEffect(() => {
    getstock();
  }, [getstock]);

  const onDeleteClick = (id) => {
    deletestock(id);
  };

  const { employee } = auth;
  const { stocks } = Stock;

  return (
    <div>
      {employee && employee.role === 'MANAGER' ? (
        <div className='container' style={{ marginTop: 50 }}>
          <h3>DISPATCHED INVENTORY REPORT</h3>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>EMAIL</th>
                <th scope='col'>PRODUCT</th>
                <th scope='col'>DESCRIPTION</th>
                <th scope='col'>QUANTITY</th>
                <th scope='col'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map(({ _id, email, product, description, quantity, priceperunit }) => (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{email}</td>
                  <td>{product}</td>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>
                    <button onClick={() => onDeleteClick(_id)} className='btn btn-danger btn-sm'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

Dispatch.propTypes = {
  getstock: PropTypes.func.isRequired,
  deletestock: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  Stock: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  Stock: state.Stock,
});

export default connect(mapStateToProps, { getstock, deletestock })(Dispatch);
