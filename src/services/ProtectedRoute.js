import React from 'react';
import {Redirect, Route} from "react-router-dom";
// import {isAuthenticated} from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    let isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={props => {
        if(isAuthenticated){
          return <Component {...props}/>
        }else{
          return <Redirect to={{
            pathname: "/login",
            state: {
              from: props.location
            }
          }}/>
        }
      }}
    />
  )
};

export default ProtectedRoute;