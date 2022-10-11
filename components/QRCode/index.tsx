 
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRscanner = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
      scanDelay={200}
      className='qr-image-wrapper'
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{ width: 300 }}
        videoContainerStyle={{ width: 300 }}
        videoStyle={{ width: 300 }}
      />
      <p>{data}</p>
    </>
  );
};

export default QRscanner