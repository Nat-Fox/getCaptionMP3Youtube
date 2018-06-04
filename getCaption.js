const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const cheerio = require('cheerio');
const htmlEntities = require('html-entities').AllHtmlEntities;

nightmare    
    .goto('https://www.youtube.com/watch?v=NPE7i8wuupk&t=309s')    
    .wait('[aria-label="More actions"]')
    .click('[aria-label="More actions"]')
    .wait('ytd-menu-service-item-renderer')
    .click('ytd-menu-service-item-renderer')
    .wait('#transcript > ytd-transcript-renderer #body ytd-transcript-body-renderer')
    .evaluate(() => {
        // const elements = document.querySelector('#transcript > ytd-transcript-renderer #body ytd-transcript-body-renderer').innerHTML;
        return document.querySelector('#transcript > ytd-transcript-renderer #body ytd-transcript-body-renderer')
            .innerHTML;
    })
    .end()    
    .then(content => {
        const $ = cheerio.load(content);

        const elems = $('.cue-group-start-offset');
        const transcript = {};
        elems.each(function (index, element) {
            transcript[$(element).html().trim()] = htmlEntities.decode($(element).next().children().html().trim());            
        });

        console.info(transcript);
    })
    .catch(error => {
        console.error('Search failed:', error)
    });