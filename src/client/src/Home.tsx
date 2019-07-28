import React from "react";
import { Link } from "react-router-dom";

interface Props {
  folders: string[];
}

export const Home: React.FC<Props> = props => {
  return (
    <div>
      {props.folders.map(folder => (
        <div key={folder}>
          <Link to={`/album/${folder}`}>{folder}</Link>
        </div>
      ))}
    </div>
  );
};
