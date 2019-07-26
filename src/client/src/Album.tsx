import React, { useState, useEffect } from "react";
import { getFolderFiles } from "./api";

interface Props {
  accessToken: string;
  folder: string;
}

export const Album: React.FC<Props> = props => {
  const [files, setFiles] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    setIsLoading(true);
    const files = await getFolderFiles(props.accessToken, props.folder);
    setFiles(files);
    setIsLoading(false);
  };

  return (
    <div>
      {files.map(file => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
};
