let sentences = [];

function submitSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const result = countDetails(sentence);
    displayResult(result);
    sentences.push(sentence);
    if (sentences.length > 10) {
        sentences.shift();  
    }
}

function countDetails(sentence) {
    const characters = sentence.length;
    const words = sentence.split(' ').filter(word => word.trim() !== '').length;
    const numbers = sentence.match(/\d+/g) ? sentence.match(/\d+/g).length : 0;
    const specialCharacters = sentence.match(/[^A-Za-z0-9\s]/g) ? sentence.match(/[^A-Za-z0-9\s]/g).length : 0;
    const dates = sentence.match(/\b\d{1,2}[./-]\d{1,2}[./-]\d{2,4}\b/g) ? sentence.match(/\b\d{1,2}[./-]\d{1,2}[./-]\d{2,4}\b/g).length : 0;
    return { characters, words, numbers, specialCharacters, dates };
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <ul>
            <li>Characters: ${result.characters}</li>
            <li>Words: ${result.words}</li>
            <li>Numbers: ${result.numbers}</li>
            <li>Special Characters: ${result.specialCharacters}</li>
            <li>Dates: ${result.dates}</li>
        </ul>
    `;
}

function showHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = `
        <h2>History</h2>
        <ul>
            ${sentences.slice(-10).map(sentence => `<li>${sentence}</li>`).join('')}
        </ul>
    `;
}
