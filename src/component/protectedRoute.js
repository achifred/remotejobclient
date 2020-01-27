import React from 'react';
import { Route, Redirect } from 'react-router-dom';
let role = localStorage.getItem('role')
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          if(role==='admin'){
            return <Component {...props} />;
          }else{
            return (
              <Redirect
                to={{
                  pathname: '/',
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
          
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
