
const btn = document.querySelector('#searchBtn');
const apiKey = 'd9ac8667cbf740f88d423a806e773628';
const url = 'http://newsapi.org/v2/top-headlines?'


btn.addEventListener('click', (element) => {
    element.preventDefault();
    const language = document.querySelector('#en').value; // default language value is 'de' for german
    const world = document.querySelector('#input').value; // default input is world
    const category = document.querySelector('#category').value; // default category is 'technology'
    // const country = document.querySelector('#country').value; 
    // console.log(world, language, country);

    const en = language;
    const input = world;
    const key = apiKey;


    // set search parameters
    const params = new URLSearchParams({
        language: en,
        apiKey: key,
        q: input,
        category: category
        // country: country

    });

fetch(`${url}${params}`) 
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.articles.forEach(dataPoint => {
            // get the data from the api and save the values as variables
            // const author = dataPoint.author;
            const content = dataPoint.content;
            const url = dataPoint.url;
            const title = dataPoint.title;
            const publishedAt = dataPoint.publishedAt;
            const date = new Date(publishedAt).toDateString();
            const urlToImage = dataPoint.urlToImage;
            const source = dataPoint.source.name;
            // console.log(author, content, description, url, title, publishedAt, urlToImage, source)

            // create HTML elements
            // container
            const articleContainer = document.createElement('article');
            const parentElement = document.createElement('div');
            // content
            const imgElement = document.createElement('figure')
            const sourceElement = document.createElement('h4')
            const titleElement = document.createElement('h4')
            const contentElement = document.createElement('p');
            const readMore = document.createElement('button');
            const dateElement = document.createElement('h4');

            // write the values to the HTML elements
            imgElement.innerHTML = `<img src="${urlToImage}" >`;
            sourceElement.innerHTML = source;
            titleElement.innerHTML = `${title} - ${source}`;
            contentElement.innerHTML = content;
            readMore.innerText = `READ MORE`;
            dateElement.innerHTML = date;

            // read more button
            readMore.addEventListener('click', () => {
                window.open(url, '_blank');
            });

            // insert into div
            parentElement.appendChild(imgElement);
            parentElement.appendChild(titleElement);
            parentElement.appendChild(contentElement);
            parentElement.appendChild(dateElement);
            parentElement.appendChild(readMore);
            // article container
            articleContainer.appendChild(parentElement);
            // append to the end of the body
            document.body.appendChild(articleContainer);
        })
    })
});



