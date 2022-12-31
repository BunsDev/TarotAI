const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const responseDisplay = document.getElementById("response-display");

const tarotCardSelect1 = document.getElementById("tarot-card-1");
const tarotCardSelect2 = document.getElementById("tarot-card-2");
const tarotCardSelect3 = document.getElementById("tarot-card-3");

sendButton.addEventListener("click", sendMessage);
tarotCardSelect1.addEventListener("change", updateMessageInput);
tarotCardSelect2.addEventListener("change", updateMessageInput);
tarotCardSelect3.addEventListener("change", updateMessageInput);

const reversedCardCheckbox1 = document.getElementById("reversed-card1");
const reversedCardCheckbox2 = document.getElementById("reversed-card2");
const reversedCardCheckbox3 = document.getElementById("reversed-card3");

reversedCardCheckbox1.addEventListener("change", updateMessageInput);
reversedCardCheckbox2.addEventListener("change", updateMessageInput);
reversedCardCheckbox3.addEventListener("change", updateMessageInput);

function updateMessageInput() {
  // Get the selected tarot card values
  const tarotCard1 = tarotCardSelect1.value;
  const tarotCard2 = tarotCardSelect2.value;
  const tarotCard3 = tarotCardSelect3.value;

  // Check if the checkbox is checked
  const isReversed1 = reversedCardCheckbox1.checked;
  const isReversed2 = reversedCardCheckbox2.checked;
  const isReversed3 = reversedCardCheckbox3.checked;

  // Update the message input with the selected tarot cards
  messageInput.value = `What is the overall meaning of a three card tarot reading with the following cards? ${tarotCard1}${isReversed1 ? " (reversed)" : ""}, ${tarotCard2}${isReversed2 ? " (reversed)" : ""}, and ${tarotCard3}${isReversed3 ? " (reversed)" : ""}?`;
}

async function sendMessage() {
  const message = messageInput.value;
  messageInput.value = "";

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 1024,
      temperature: 0.5,
      model: "text-davinci-003",
    }),
  });
  const responseJson = await response.json();
  const responseText = responseJson.choices[0].text
}

// Function to toggle the slide out menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.left === "-250px") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-250px";
  }
}
