import './App.css';
import { useEffect } from 'react';
import { AdminPortal, useAuth } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/#/account/login"
    }
  }, [isAuthenticated]);

  const logout = () => {
    window.location.href = "/#/account/logout"
  };

  return (
      <div className="App">
            <div>
              <div>
                <img src={user?.profilePictureUrl} alt={user?.name}/>
              </div>
              <div>
                <span>Logged in as: {user?.name}</span>
              </div>
              <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
              </div>
              <div>
                <button onClick={() => AdminPortal.show()}>Open admin portal</button>
              </div>
              <div>
                <button onClick={() => logout()}>Click to logout</button>
              </div>
            </div>
      </div>
  );
}

export default App;
