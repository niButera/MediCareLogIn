const video = document.getElementById('qr-video');
const canvas = document.getElementById('qr-canvas');
const ctx = canvas.getContext('2d');

const constraints = {
  video: {
    facingMode: { exact: "environment" }
  }
};

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    video.srcObject = stream;
    video.setAttribute('playsinline', true);
    video.play();
    requestAnimationFrame(tick);
  });

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });
    if (code) {
      console.log('Código QR encontrado:', code.data);
      // Redireciona para o link fornecido pelo código QR
      window.location.href = code.data;
    }
  }
  requestAnimationFrame(tick);
}


