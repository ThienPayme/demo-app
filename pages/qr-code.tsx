import { useState } from "react"
import QrCodeReader from "../components/qr-code-reader"
const QRCodePage = () => {
  const [scan, setScan] = useState(false)

  const handleScanQr = (result: any, error: any) => {
    if (!!result) {
      setScan(false)
      alert(result.text)
    }

    if (!!error) {
      console.info(error)
    }
  }

  return (
    <div>
      {" "}
      <QrCodeReader
        onScan={handleScanQr}
        open={true}
        onCancel={() => {
          // setScan(false);
        }}
      />
    </div>
  )
}

export default QRCodePage
