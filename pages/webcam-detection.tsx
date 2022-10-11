import React from "react";
import Webcam from "react-webcam";
const WebcamPage = () => {
  const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}

      <div style={{ marginTop: 100 }}>
        <input type="file" accept="image/*" capture />
        <input type="file" accept="image/*" capture="user" />
        <input type="file" accept="image/*" capture="environment" />
      </div>
      <h1>QR Code Scanner</h1>
      <canvas id="qr-canvas"></canvas>
    </>
  );
};

export default WebcamPage;
