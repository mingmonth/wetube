const recorderContainer = document.getElementById("jsRecordContainer");
const recordButton = document.getElementById("jsRecordButton");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = event => {
  // console.log(event);
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  recordButton.removeEventListener("click", stopRecording);
  recordButton.addEventListener("click", getVideo);
  recordButton.innerHTML = "Start Recording";
};

const startRecording = () => {
  // console.log(streamObject);
  videoRecorder = new MediaRecorder(streamObject);
  // videoRecorder.ondataavailable = handleVideoData;
  videoRecorder.start();
  console.log(videoRecorder);
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  // setTimeout(() => videoRecorder.stop(), 5000);
  recordButton.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    // console.log(stream);
    videoPreview.srcObject = stream;
    videoPreview.play();
    videoPreview.muted = true;
    recordButton.innerHTML = "Stop Recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordButton.innerHTML = "Cant record";
  } finally {
    recordButton.removeEventListener("click", getVideo);
  }
};

function init() {
  recordButton.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
