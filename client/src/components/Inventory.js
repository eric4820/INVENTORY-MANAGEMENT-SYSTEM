import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteInventory } from '../actions/Inventoryaction';

const Inventory = ({ getItems, deleteInventory, auth, Inventory }) => {
  const [table, setTable] = useState(false);

  useEffect(() => {
    getItems();
  }, [getItems]);

  const onDeleteClick = (id) => {
    deleteInventory(id);
  };

  const { employee } = auth;
  const { inventories } = Inventory;
  var exp = 0;

  return (
    <div>
      {employee && employee.role === 'MANAGER' ? (
        <div className="container" style={{ marginTop: 50 }}>
          <h3>RECEIVED INVENTORY REPORT</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">BEST BEFORE</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">DAYS BEFORE EXPIRY</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {inventories.map(
                ({ _id, email, product, description, expirydate, quantity, priceperunit }) => (
                  <tr key={_id}>
                    <td>{_id}</td>
                    <td>{email}</td>
                    <td>{product}</td>
                    <td>{description}</td>
                    <td>{expirydate}</td>
                    <td>{quantity}</td>
                    <td>
                      {(exp = Math.trunc((new Date(expirydate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))) > 0 ? (
                        exp
                      ) : (
                        <button className="btn btn-danger btn-sm">EXPIRED</button>
                      )}
                    </td>
                    <td>
                      <button onClick={() => onDeleteClick(_id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

Inventory.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteInventory: PropTypes.func.isRequired,
  pauth: PropTypes.object.isRequired,
  Inventory: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  pauth: state.pauth,
  auth: state.auth,
  Inventory: state.Inventory,
});

export default connect(mapStateToProps, { getItems, deleteInventory })(Inventory);
