// função obter um meme aleatório
function getRandomMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            var memes = data.data.memes;
            var randomMeme = memes[Math.floor(Math.random() * memes.length)];

            document.getElementById('memeImage').src = randomMeme.url;
            document.getElementById('memeName').textContent = 'nome: ' + randomMeme.name;
            // document.getElementById('memeCaption').textContent = 'legenda: ' + (randomMeme.box_count > 0 ? '...' : 'N/A');
        });
}

// função obter uma citação aleatória
function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            var quote = data.content;
            var author = data.author;

            document.getElementById('quote').textContent = quote;
            document.getElementById('quoteAuthor').textContent = 'Author: ' + author;
        });
}

// função gerar um novo meme
function generateMeme() {
    getRandomMeme();
    getRandomQuote();
}

// chamar as funções ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    generateMeme();

    // associar o botão com a função de gerar o meme
    document.getElementById('generateMemeButton').addEventListener('click', function() {
        generateMeme();
    });
});