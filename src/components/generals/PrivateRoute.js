import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={props => {
    console.log(rest);  
    return(
      rest.user ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}}/>)
  }

export default PrivateRoute;