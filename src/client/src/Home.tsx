import React, { useState, useEffect } from "react";
import { getBlobFolders } from "./api";
import { Link } from "react-router-dom";

interface Props {
  accessToken: string;
}

export const Home: React.FC<Props> = props => {
  const [folders, setFolders] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFolders(props.accessToken);
  }, [props.accessToken]);

  const getFolders = async (accessToken: string) => {
    setIsLoading(true);
    const folders = await getBlobFolders(accessToken);
    setFolders(folders);
    setIsLoading(false);
  };

  return (
    <div>
      {folders.map(folder => (
        <div key={folder}>
          <Link to={`/album/${folder}`}>{folder}</Link>
        </div>
      ))}
    </div>
  );
};
