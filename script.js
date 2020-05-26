const textE1 = document.querySelector('.rubber-band');
const text = textE1.textContent;
const letters = text.split('');

let html = "";

const makespan = letter => `<span class="rubber-letter">${letter}</span>`

letters.forEach(letter => (html += makespan(letter)));

textE1.innerHTML = html;