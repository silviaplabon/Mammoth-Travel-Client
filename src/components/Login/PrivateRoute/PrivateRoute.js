import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";
const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const token = sessionStorage.getItem('token');

  // useEffect(()=>{
  //   {
  //     (!loggedInUser.email &&!loggedInUser.email) && isLoggedIn(token);
  //   }
      
  // },[!loggedInUser.email])

  // const isLoggedIn = (token) => {
  //   console.log(token)
  //   if (!token) {
  //     return false;
  //   }
  //   const decodedToken = jwt_decode(token);
  //   const { name, email, picture } = decodedToken;
  //   console.log(decodedToken)
  //   const signedInUser = {
  //     displayName: name,
  //     email: email,
  //     photo: picture,
  //     isSignedIn: true,
  //     error: ''
  //   }
  //   setLoggedInUser(signedInUser);
  //   console.log(loggedInUser);
  //   const currentTime = new Date().getTime() / 1000;
  //   return decodedToken.exp > currentTime;
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;


// import React, { useEffect, useState } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../../../App';
// import jwt_decode from "jwt-decode";

// const PrivateRoute = ({children, ...rest}) => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     const isLoggedIn = () => {
//       const token = sessionStorage.getItem('token');
//       if(!token){
//         return false;
//       }
//       const decodedToken = jwt_decode(token);
//       // get current time
//       const currentTime = new Date().getTime() / 1000;
//       // compare the expiration time with the current time
//       // will return false if expired and will return true if not expired
//       return decodedToken.exp > currentTime;
//     }
//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//         (loggedInUser.email || isLoggedIn()) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     );
// };

// export default PrivateRoute;