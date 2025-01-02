const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Kuromi's responses
const responses = [
  "KUROMI: Hello there, cutie! 💜",
  "KUROMI: What's on your mind? darling",
  "KUROMI: Mwahaha, Kuromi loves chatting!",
  "KUROMI: Let's cause some mischief together! i won't tell anyone ok? hehe",
  "KUROMI: I'm My Melody's rival, but I'm still lovable, right? 💜",
];

// Add message to chat log
function addMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}

// Send message event
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage("user-message", userMessage);
    userInput.value = "";

    // Kuromi responds
    setTimeout(() => {
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      addMessage("kuromi-message", randomResponse);
    }, 1000); // Delay for realism
  }
});
