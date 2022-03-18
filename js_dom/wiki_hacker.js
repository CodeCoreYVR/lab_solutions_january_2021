// Change the title of the article to your name.
document.querySelector('#firstHeading').innerHTML = 'Hacker!';

// Hide the body of the article
document.getElementById('mw-content-text').style.visibility = 'hidden';
// or
document.getElementById('mw-content-text').style.display = 'none';
// ^ these both hide the body of the article, but in different ways.
// However, since they are only hidden, both bodies can be redisplayed:
// document.getElementById('mw-content-text').style.visibility = 'visible';
// or
// document.getElementById('mw-content-text').style.display = 'block';

// Replace the Wikipedia logo with another picture
const logo = document.querySelector('.mw-wiki-logo');
logo.style.backgroundImage =
    "url('https://media.giphy.com/media/GikaO7iae3Rja/giphy.gif')";

// Stretch: Replace the word "pug" in every p tag with "spud"

let paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
    const pText = p.innerText;
    const newText = pText
        .split('pug')
        .join('spud');
    p.innerText = newText;
}