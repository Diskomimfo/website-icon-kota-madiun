<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code Generator</title>
  <script src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/qrcode.min.js"></script>
</head>
<body>
  <!-- Div untuk QR Code -->
  <h2>QR Code untuk Merlion</h2>
  <div id="qrcode-merlion"></div>

  <h2>QR Code untuk Liberty</h2>
  <div id="qrcode-liberty"></div>

  <!-- Script untuk Generate QR Code -->
  <script>
    // Membuat QR code untuk modal Merlion
    const merlionUrl = "https://example.com#modal-merlion"; // Ganti dengan URL situsmu
    QRCode.toCanvas(document.getElementById('qrcode-merlion'), merlionUrl, function (error) {
      if (error) console.error(error);
      console.log('QR code generated for Merlion');
    });

    // Membuat QR code untuk modal Liberty
    const libertyUrl = "https://example.com#modal-liberty"; // Ganti dengan URL situsmu
    QRCode.toCanvas(document.getElementById('qrcode-liberty'), libertyUrl, function (error) {
      if (error) console.error(error);
      console.log('QR code generated for Liberty');
    });
  </script>
</body>
</html>
