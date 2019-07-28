import React, { useState, useEffect } from "react";

interface Props {
  accessToken: string;
  url: string;
  style?: any;
}

const arrayBufferToBase64 = (buffer: any) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach(b => (binary += String.fromCharCode(b)));

  return window.btoa(binary);
};

export const AuthImage: React.FC<Props> = props => {
  const [data, setData] = useState("");

  useEffect(() => {
    getImage(props.url, props.accessToken);
  }, [props.url, props.accessToken]);

  const getImage = async (url: string, accessToken: string) => {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
        "x-ms-version": "2017-11-09"
      }
    });
    if (!response.ok) throw new Error();

    const buffer = await response.arrayBuffer();
    var imageStr = arrayBufferToBase64(buffer);
    var base64Flag = "data:image/jpeg;base64,";

    setData(base64Flag + imageStr);
  };

  return <img src={data} style={props.style} alt="" />;
};
