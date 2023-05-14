import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getemployees, deleteemployee } from '../actions/authactions';

const Employee = ({ auth: { employee, employees }, getemployees, deleteemployee }) => {
  useEffect(() => {
    getemployees();
  }, [getemployees]);

  const onDeleteClick = id => {
    deleteemployee(id);
  };

  return (
    <div>
      {employee && employee.role === 'ADMIN' ? (
        <div className="container" style={{ marginTop: 50 }}>
          <h3>EMPLOYEES TABLE</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">EMAIL</th>
                <th scope="col">USERNAME</th>
                <th scope="col">ROLE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(({ _id, name, email, role }) => (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{email}</td>
                  <td>{name}</td>
                  <td>{role}</td>

                  <td>
                    <button onClick={() => onDeleteClick(_id)} className="btn btn-danger btn-sm">
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

Employee.propTypes = {
  getemployees: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getemployees, deleteemployee })(Employee);
