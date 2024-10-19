// Destructuring example with default values
const settings = { theme: 'dark', language: 'en' };
const { theme, language, mode = 'light' } = settings;

document.getElementById('app').innerHTML = `
    <p>Theme: ${theme}</p>
    <p>Language: ${language}</p>
    <p>Mode: ${mode}</p>
`;
