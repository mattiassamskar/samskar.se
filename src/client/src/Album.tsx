import React, { useState, useEffect } from "react";
import { getFolderFiles, uploadFiles } from "./api";
import { AuthImage } from "./AuthImage";
interface Props {
  accessToken: string;
  folder: string;
}

export const Album: React.FC<Props> = props => {
  const [files, setFiles] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFiles(props.accessToken, props.folder);
  }, [props.accessToken, props.folder]);

  const getFiles = async (accessToken: string, folder: string) => {
    setIsLoading(true);
    const files = await getFolderFiles(accessToken, folder);
    setFiles(files);
    setIsLoading(false);
  };

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await uploadFiles(e.dataTransfer.files, props.folder, props.accessToken);
    setIsLoading(false);
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <div
      onDragOver={e => e.preventDefault()}
      onDragEnd={e => e.dataTransfer.clearData()}
      onDrop={onDrop}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw"
      }}
    >
      {files.map(file => (
        <AuthImage
          key={file}
          accessToken={props.accessToken}
          url={file}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            marginTop: "1rem"
          }}
        />
      ))}
    </div>
  );
};
