import React, { useState } from "react";
import { UserAgentApplication, AuthenticationParameters } from "msal";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");
  const [folders, setFolders] = useState([]);

  const getAccessToken = async () => {
    const userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: "75a0a84b-3082-4a1c-9bdd-c4652ef3dbe4",
        authority:
          "https://login.microsoftonline.com/51f829d7-e997-4ba6-ab64-0797bcb49176",
        redirectUri: "http://localhost:3000"
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    });

    const authenticationParameters: AuthenticationParameters = {
      scopes: ["user.read"]
    };

    try {
      const response = await userAgentApplication.acquireTokenSilent(
        authenticationParameters
      );
      setAccessToken(response.accessToken);
      setName(response.account.name);
    } catch {
      const response = await userAgentApplication.loginPopup(
        authenticationParameters
      );
      setAccessToken(response.accessToken);
      setName(response.account.name);
    }
  };

  const getFolders = () => {
    const url = "https://samskarstorage.blob.core.windows.net/samskar-se";
  };

  return (
    <div>
      <div>samskar.se</div>
      <button onClick={getAccessToken}>Login</button>
      <div>Access token: {accessToken}</div>
      <div>Name: {name}</div>
      <button onClick={getFolders}>Get folders</button>
      {folders.map(folder => (
        <div>{folder}</div>
      ))}
    </div>
  );
};

export default App;
