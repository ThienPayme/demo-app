import { Modal } from "antd";
import { OnResultFunction, QrReader } from "react-qr-reader";

interface PropQrCodeReader {
  open: boolean;
  onCancel?: any;
  onScan: OnResultFunction;
}

const QrCodeReader: React.FC<PropQrCodeReader> = ({
  open,
  onCancel,
  onScan,
}) => {
  const OverVideo: any = () => {
    return <div className="qr-overvideo"></div>;
  };
  return (
    <>
      <Modal
        visible={open}
        title="Scan QR code"
        onCancel={onCancel}
        footer={false}
      >
        <QrReader
          scanDelay={500}
          videoId="qr-code-reader"
          className="qr-image-wrapper"
          onResult={onScan}
          constraints={{ facingMode: "user" }}
          ViewFinder={OverVideo}
        />
        <p>{}</p>
      </Modal>
    </>
  );
};

export default QrCodeReader;
