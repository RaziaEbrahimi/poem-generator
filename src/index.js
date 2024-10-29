function generatePoem(event) {
  event.preventDefault();
  let poemTitle = document.querySelector("#instructions");
  let apiKey = "c0fe48db87o5af7b7dbeb543tdaa050b";
  let prompt = `User instructions: Generate a English and Persian poem about ${poemTitle.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in English and Persian and follow direction for Persian poem start right to left . Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
