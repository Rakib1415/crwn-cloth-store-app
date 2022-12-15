import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicOutlet = ({currentUser}) => {
  return !currentUser ? (<Outlet/>) : (<Navigate to="/"/>);
}

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser
});

export default connect(mapStateToProps)(PublicOutlet);
