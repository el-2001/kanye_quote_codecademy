
import fetch from 'node-fetch';

console.log('Your inspirational quote of the day by Kanye is...');
const  getQuote = async () =>{
    const  quote = await fetch('https://api.kanye.rest').then(resolve =>{
    return resolve.json();
}).then((response) =>{
    return response.quote;
})
console.log(quote);
}

getQuote();
