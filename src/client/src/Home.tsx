import React, { useState, useEffect } from "react";
import { getBlobFolders } from "./api";

interface Props {
  accessToken: string;
}

export const Home: React.FC<Props> = props => {
  const [folders, setFolders] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    setIsLoading(true);
    const folders = await getBlobFolders(props.accessToken);
    setFolders(folders);
    setIsLoading(false);
  };

  return (
    <div>
      {folders.map(folder => (
        <div key={folder}>{folder}</div>
      ))}
    </div>
  );
};
