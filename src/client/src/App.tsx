import React, { useState, useEffect } from "react";
import { getBlobFolders, getLoginData, getFolderFiles } from "./api";

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

  return (
    <div>
      <div>samskar.se - {name}</div>
    </div>
  );
};

export default App;
