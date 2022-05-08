import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function AuthGuard({children}) {
  const [loggedIn] = useState(true);
  const location = useLocation();
  if(!loggedIn){
      return <Navigate to="/home" state={{ from: location }} replace />
  }
  return children;
}

export default AuthGuard