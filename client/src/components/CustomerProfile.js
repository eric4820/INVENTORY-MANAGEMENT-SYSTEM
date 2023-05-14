import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteInventory } from '../actions/Inventoryaction';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customer = ({ getItems, deleteInventory, pauth, Inventory }) => {

  useEffect(() => {
    getItems();
  }, [getItems]);

  const onDeleteClick = id => {
    deleteInventory(id);
  };

  const { supplier } = pauth;
  const { inventories } = Inventory;

  return (
    <div>
      {
        supplier ? (
          <div className="container" style={{ marginTop: 50 }}>
            <h3>SUPPLIER DELIVERIES TABLE</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">BEST BEFORE</th>
                  <th scope="col">QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {
                  inventories.filter(({ _id, email, product, description, expirydate, quantity, priceperunit }) =>
                    email === supplier.email
                  ).map(({ _id, email, product, description, expirydate, quantity, priceperunit }) => (
                    <tr key={_id}>
                      <td>{_id}</td>
                      <td>{email}</td>
                      <td>{product}</td>
                      <td>{description}</td>
                      <td>{expirydate}</td>
                      <td>{quantity}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        ) : (null)
      }
    </div>
  );
};

Customer.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteInventory: PropTypes.func.isRequired,
  pauth: PropTypes.object.isRequired,
  Inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  pauth: state.pauth,
  auth: state.auth,
  Inventory: state.Inventory,
});

export default connect(mapStateToProps, { getItems, deleteInventory })(Customer);
