import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getLoginData } from "./api";
import { Home } from "./Home";
import { Album } from "./Album";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    const loginData = await getLoginData();
    setAccessToken(loginData.accessToken);
    setName(loginData.name);
  };

  if (accessToken === "") return <div />;

  return (
    <BrowserRouter>
      <div>samskar.se - {name}</div>
      <Route
        path="/"
        exact
        render={props => <Home {...props} accessToken={accessToken} />}
      />
      <Route
        path="/album/:albumId"
        render={props => (
          <Album
            {...props}
            accessToken={accessToken}
            folder={props.match.params.albumId}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
