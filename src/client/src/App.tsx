import React, { useState } from "react";
import { getBlobFolders, getLoginData, getFolderFiles } from "./api";

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");
  const [folders, setFolders] = useState([""]);
  const [files, setFiles] = useState([""]);

  const login = async () => {
    const loginData = await getLoginData();
    setAccessToken(loginData.accessToken);
    setName(loginData.name);
  };

  const getFolders = async () => {
    const folders = await getBlobFolders(accessToken);
    setFolders(folders);
  };

  const getFiles = async (folder: string) => {
    const files = await getFolderFiles(accessToken, folder);
    setFiles(files);
  };

  return (
    <div>
      <div>samskar.se</div>
      <button onClick={login}>Login</button>
      <div>Access token: {accessToken}</div>
      <div>Name: {name}</div>
      <button onClick={getFolders}>Get folders</button>
      {folders.map(folder => (
        <div key={folder} onClick={() => getFiles(folder)}>
          {folder}
        </div>
      ))}
      {files.map(file => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
};

export default App;
