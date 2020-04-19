const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.mohfw.gov.in/').then(response => {
    const $ = cheerio.load(response.data);
    $('.table > tbody > tr:nth-child(8) > td').toArray().map(item => {
        // if($(item).text().indexOf('Maharashtra') > -1) {
            console.log($(item).text());
        // }
    });
});
