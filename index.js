document.getElementById('generate-btn').addEventListener('click', function() {
    const url = document.getElementById('qr-url').value;
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('download-btn');
    
    if (!url) {
        alert('Digite algo primeiro!');
        return;
    }

    qrcodeDiv.innerHTML = '';
    
    new QRCode(qrcodeDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'block';
    
    downloadBtn.onclick = function() {
        const canvas = qrcodeDiv.querySelector('canvas');
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = url;
        link.click();
    };
});