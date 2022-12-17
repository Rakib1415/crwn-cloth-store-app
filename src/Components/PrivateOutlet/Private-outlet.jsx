import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../store/user/user-selectors';

const PrivateOutlet = ({currentUser}) => {
  return currentUser ? (<Outlet/>) : (<Navigate to="/signin"/>);
}

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser
});

export default connect(mapStateToProps)(PrivateOutlet);