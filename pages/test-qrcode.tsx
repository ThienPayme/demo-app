import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
const TestQRCode = () => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result: any, error: any) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default TestQRCode;
