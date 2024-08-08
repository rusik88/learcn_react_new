export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const replaceTextMark = (text, search) => {
    let resText = text
    if(search) {
        const regex = new RegExp(search, 'gi')
        const matchText = text.match(regex)
        if(matchText[0] !== undefined) {
            resText = text.replace(regex, `<span class="highlight">${matchText[0]}</span>`)
        }
    }
    return resText
}