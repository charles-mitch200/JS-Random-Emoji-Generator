const buttonElem = document.querySelector(".js-btn");
const emojiNameElem = document.querySelector(".js-emoji-name");

// Initialize an empty array
const emoji = [];

// Function to fetch a random emoji from an API
const getEmoji = async () => {
  const response = await fetch(
    "https://emoji-api.com/emojis?access_key=3a1ad26120be7547d28af28e4a68251a1f52a0ae"
  );
  const data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiImg: data[i].character,
      emojiName: data[i].unicodeName.split(" ", 2)[1],
    });
  }
};

// Call the function any time the page loads
getEmoji();

// Get a random emoji whenever you click the button
buttonElem.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * emoji.length);
  buttonElem.innerText = emoji[randomNum].emojiImg;
  emojiNameElem.innerText = emoji[randomNum].emojiName;
});
