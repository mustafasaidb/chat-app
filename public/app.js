const socket = io.connect("https://chat-3y4l0lw2x-mustafa-said-bektass-projects.vercel.app/");

const sender = document.getElementById("sender");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

submitBtn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    sender: sender.value,
  });
});

socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.sender + ": </strong>" + data.message + "</p>";
  message.value = "";
});

message.addEventListener("keypress", () => {
  socket.emit("typing", sender.value);
});

socket.on("typing", (data) => {
  feedback.innerHTML = "<p>" + data + " yazıyor...</p>";
});
