function openCamera() {
    // Open a new tab
    const newTab = window.open("", "_blank");

    if (newTab) {
        // Write HTML content inside the new tab
        newTab.document.write(`
            <html>
            <head>
                <title>Webcam</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: black;
                    }
                    video {
                        width: 80%;
                        max-width: 600px;
                        border: 3px solid white;
                        border-radius: 10px;
                    }
                </style>
            </head>
            <body>
                <video id="video" autoplay></video>
                <script>
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then(function (stream) {
                            document.getElementById("video").srcObject = stream;
                        })
                        .catch(function (error) {
                            alert("Camera access denied! Please allow camera permissions.");
                            console.error(error);
                        });
                </script>
            </body>
            </html>
        `);
    } else {
        alert("Popup blocked! Please allow popups to open the webcam.");
    }
}
function openCamera() {
    window.open("webcam.html", "_blank");
}
