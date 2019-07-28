import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getLoginData, getBlobFolders } from "./api";
import { Home } from "./Home";
import { Album } from "./Album";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");
  const [folders, setFolders] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    setIsLoading(true);
    const loginData = await getLoginData();
    const folders = await getBlobFolders(loginData.accessToken);
    setAccessToken(loginData.accessToken);
    setName(loginData.name);
    setFolders(folders);
    setIsLoading(false);
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <BrowserRouter>
      <div>samskar.se - {name}</div>
      <Route
        path="/"
        exact
        render={props => <Home {...props} folders={folders} />}
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
