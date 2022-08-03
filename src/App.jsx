import { useState } from 'react'
import QRCode from 'qrcode'



function App() {
  const [url, setUrl] = useState("")
  const [qrcode, setQrcode] = useState("")

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
    }, (err, url) => {

      if (err) {
        return console.error(err)
      }

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="app">
      <h1>QR Code Generator</h1> 
      <input 
        type="text"
        placeholder='e.g. https://google.com'
        value={url}
        onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generateQRCode}>Generate!</button> 
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
      </>}
      
    </div>
  )
}

export default App
