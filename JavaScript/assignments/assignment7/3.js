const settings = {
    theme: 'dark',
    language: 'en',
};

const { theme, language, mode = 'light' } = settings;

console.log(theme); // dark
console.log(language); // en
console.log(mode); // light since mode does not exist in settings