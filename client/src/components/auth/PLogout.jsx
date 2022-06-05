import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {logout} from '../../actions/supplieraction';
import{NavLink} from 'reactstrap';
import PropTypes from 'prop-types';
export class PLogout extends Component {
    static propTypes={
        logout:PropTypes.func.isRequired
    };
    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    Log Out 
                </NavLink>
            </Fragment>
        )
    }
}

export default connect(null,{logout}) (PLogout);