const generateBtn = document.querySelector("button");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const memeAuthor = document.querySelector(".meme-author");

function getMeme() {
  memeTitle.innerText = "Loading..";
  memeAuthor.innerText = "Loading..";
  memeImage.src = "";

  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      const { author, title, url } = data;
      memeAuthor.innerText = author;
      memeTitle.innerText = title;
      memeImage.src = url;
    })
    .catch((error) => {
      memeTitle.innerText = "Failed to load meme";
      console.error("Error fetching meme:", error);
    });
}

getMeme();
generateBtn.addEventListener("click", () => {
  getMeme();
});
