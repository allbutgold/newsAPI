


function news() {
    let de = document.querySelector('#de').value; // default language value is 'de' for german
    let world = document.querySelector('#input').value;
    console.log(world);

fetch(`https://newsapi.org/v2/everything?q=${world}&from=2023-01-16&sortBy=relevancy&apiKey=12524e5113c24ca591d9e5e168cbdf92&language=${de}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach(dataPoint => {
            // get the data from the api and save the values as variables
            // const author = dataPoint.author;
            const content = dataPoint.content;
            // const description = dataPoint.description;
            const url = dataPoint.url;
            const title = dataPoint.title;
            const publishedAt = dataPoint.publishedAt;
            const date = new Date(publishedAt).toDateString();
            const urlToImage = dataPoint.urlToImage;
            const source = dataPoint.source.name;
            // console.log(author, content, description, url, title, publishedAt, urlToImage, source)

            // create HTML elements
            const parentElement = document.createElement('div');
            const imgElement = document.createElement('figure')
            // const descriptionElement = document.createElement('h3')
            const sourceElement = document.createElement('h4')
            const titleElement = document.createElement('h4')
            // const urlElement = document.createElement('a')
            const contentElement = document.createElement('p');
            const readMore = document.createElement('button');
            const dateElement = document.createElement('p');
            console.log(dateElement);

            // write the values to the HTML elements
            imgElement.innerHTML = `<img src="${urlToImage}" >`;
            sourceElement.innerHTML = source;
            titleElement.innerHTML = `${title} - ${source}`;
            contentElement.innerHTML = content;
            readMore.innerText = `read more`;
            dateElement.innerHTML = date;
            
            // console.log(imgElement.innerHTML);

            readMore.addEventListener('click', () => {
                window.open(url, '_blank');
            });

            // insert into the page
            parentElement.appendChild(imgElement);
            parentElement.appendChild(titleElement);
            parentElement.appendChild(contentElement);
            parentElement.appendChild(dateElement);
            parentElement.appendChild(readMore);

            document.body.appendChild(parentElement);


        })

    })};

    news();

