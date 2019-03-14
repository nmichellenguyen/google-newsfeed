let news = [];
let Pages = 1;

document.getElementById("button").addEventListener("click", readMore)

function readMore() {
    // alert ('hello');
    Pages++;
    fetchNews();
}


async function fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b15497e920434c4abb86969ab82882cf&page=${Pages}&pageSize=10`;
    let result = await fetch(url);
    let data = await result.json();
    news = news.concat(data.articles);
    volume = news.length;

    // document.getElementById("num-headlines").innerHTML = `You are reading ${volume} headlines`;
    render(volume);
}




function render(volume) {
    document.getElementById("num-headlines").innerHTML = `You are reading ${volume} news stories...`

    document.getElementById("news-stories").innerHTML =
        news.map(article =>
            `<div class="news-story"> 
  <div class="news-content">
  <h2> ${article.title} </h2> 
  <p> ${article.source.name} </p> 
  <p> ${moment(article.publishedAt).fromNow()} </p> 
  <p> <a href='${article.url}'>See more </a></p>
</div> 
<div class="news-image">
<img src='${article.urlToImage}' width='150px' height=''/>
</div>
</div>`
        )
}

fetchNews();