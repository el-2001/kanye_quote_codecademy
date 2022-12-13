
import fetch from 'node-fetch';

console.log('Your inspirational quote of the day by Kanye is... \n ... \n ... ');
const  getQuote = async () =>{
    const  quote = await fetch('https://api.kanye.rest').then(resolve =>{
    return resolve.json();
}).then((response) =>{
    return `"${response.quote}" -Kanye`;
})
console.log(quote);
}

getQuote();
