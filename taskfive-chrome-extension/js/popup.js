document.addEventListener("DOMContentLoaded", () => {
  // GET THE SELECTORS OF THE BUTTONS
  const startVideoButton = document.getElementById("start_video");
  const cameraButton = document.getElementById("cameraButton");
  const audioButton = document.getElementById("audioButton");
  const closeButton = document.querySelector(".bi-x-circle");

  // Initialize camera and audio status
  let isCameraOn = false;
  let isAudioOn = false;

  // Function to toggle camera status
  function toggleCamera() {
    isCameraOn = !isCameraOn;
    cameraButton.classList.toggle("bi-toggle-off", !isCameraOn);
    cameraButton.classList.toggle("bi-toggle-on", isCameraOn);
  }

  // Function to toggle audio status
  function toggleAudio() {
    isAudioOn = !isAudioOn;
    audioButton.classList.toggle("bi-toggle-off", !isAudioOn);
    audioButton.classList.toggle("bi-toggle-on", isAudioOn);
  }

  startVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "Error on line 17");
          }
        }
      );
    });
  });

  // Add event listeners for camera and audio toggles
  cameraButton.addEventListener("click", () => {
    toggleCamera();
    // Add your logic to control camera here (e.g., turn on/off camera)
  });

  audioButton.addEventListener("click", () => {
    toggleAudio();
    // Add your logic to control audio here (e.g., turn on/off audio)
  });

  closeButton.addEventListener("click", () => {
    window.close(); // Close the window when the close button is clicked
  });
});
