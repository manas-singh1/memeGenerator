const genMemeBtn = document.querySelector(".gen-meme-btn");
const memeImg = document.querySelector("img");
const memeTitle = document.querySelector(".meme-gen .meme-title");
const memeAuthor = document.querySelector(".meme-author");



const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            update(data.url, data.title, data.author);
        });
};
const update = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `memes by: ${author}`;
};

genMemeBtn.addEventListener("click", generateMeme);

generateMeme();