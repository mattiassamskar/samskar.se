import React, { useState } from "react";
import { getBlobFolders, getLoginData } from "./api";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");
  const [folders, setFolders] = useState([""]);

  const login = async () => {
    const loginData = await getLoginData();
    setAccessToken(loginData.accessToken);
    setName(loginData.name);
  };

  const getFolders = async () => {
    const folders = await getBlobFolders(accessToken);
    setFolders(folders);
  };

  return (
    <div>
      <div>samskar.se</div>
      <button onClick={login}>Login</button>
      <div>Access token: {accessToken}</div>
      <div>Name: {name}</div>
      <button onClick={getFolders}>Get folders</button>
      {folders.map(folder => (
        <div key={folder}>{folder}</div>
      ))}
    </div>
  );
};

export default App;
