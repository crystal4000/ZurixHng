console.log("Script is Injected!");

var recorder = null;
let videoChunks = [];
let audioChunks = [];
function sendChunkToBackend(blob) {
  const formData = new FormData();
  formData.append("file", blob, "screen-recording.webm");
  fetch("https://chrome-extenion.onrender.com/api/video/save", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Chunk sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending chunk:", error);
    });
}

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstart = function () {
    alert("Recording has started.");
  };
  fetch("https://chrome-extenion.onrender.com/api/video/start", {
    method: "POST",
  });

  recorder.onstop = function () {
    alert("Recording has stopped.");
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();

        fetch("https://chrome-extenion.onrender.com/api/video/upload", {
          method: "POST",
          // body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Sucesss:", data);
          });
      }
    });
  };

  recorder.ondataavailable = function (event) {
    // let recordedBlob = event.data;
    // let url = URL.createObjectURL(recordedBlob);

    // let a = document.createElement("a");

    // a.style.display = "none";
    // a.href = url;
    // a.download = "screen-recording.webm";

    // document.body.appendChild(a);
    // a.click();

    // document.body.removeChild(a);

    // URL.revokeObjectURL(url);
    if (event.data.size > 0) {
      console.log("inside event size");
      if (event.data.type === "video/webm;codecs=vp8") {
        // 'video/webm;codecs=vp8'
        console.log("inside type condition");
        videoChunks.push(event.data);
        console.log("eventdata:", event.data);
      } else if (event.data.type === "audio/webm") {
        audioChunks.push(event.data);
      } else {
        console.log("not match");
      }
    }
    console.log("video-chunks:", videoChunks);
    let recordedBlob = event.data;
    // sendChunkToBackend(recordedBlob);
    console.log("recordedBlob has been assigned");
    console.log(recordedBlob);
    sendChunkToBackend(recordedBlob);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
    fetch("https://chrome-extenion.onrender.com/api/video/upload", {
      method: "POST",
      // body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Chunk sent successfully:", data);
      });
  }
});
