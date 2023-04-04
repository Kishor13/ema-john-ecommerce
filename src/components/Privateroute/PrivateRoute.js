import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

    const PrivateRoute = ({ children, ...rest }) => {
      const { loggedInUser, setLoggedInUser } = useContext(UserContext);

        if (!loggedInUser) 
        return(
          
          <Navigate to="/login" state={from:location}/>
           
          );
        return(
          {children}
          
        
          );
};

export default PrivateRoute;