// Toggle like visibility on click
function like() {
  var likes = document.querySelectorAll("#heart");
  likes.forEach((like) => {
    like.style.visibility = (like.style.visibility === "visible") ? "hidden" : "visible";
  });
}

// Send user input as a new message in chat
function send() {
  var usermsg = document.getElementById("send-input").value;
  if (usermsg.trim() !== "") { // Check if input is not empty
    var chatContainer = document.querySelector(".chats"); // Chat container

    // Create a new message bubble for user input
    var newMessage = document.createElement("div");
    newMessage.className = "user-input";
    newMessage.style.display = "block";
    newMessage.textContent = usermsg;

    // Append the new message to the chat container
    chatContainer.appendChild(newMessage);

    // Clear the input field after sending
    document.getElementById("send-input").value = "";
  }
}
