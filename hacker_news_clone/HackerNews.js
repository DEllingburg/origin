

let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&pageSize=30&apiKey=f793fccc06d04dd9b08c04f94c700f63";

fetch(url)
  .then(r => {
  return r.json();
  }
)
  .then(data => {
  let articles = data.articles;
  let newsList = document.createElement("ol");
  let body = document.querySelector("body section");
  body.appendChild(newsList);
  articles.map(news => {
    let newsItem = document.createElement("li");
    newsItem.innerHTML = '<a href="' + news.url + '">' + news.title + "</a>";
    newsList.appendChild(newsItem);
  });
})


  .catch(e => {
  console.log(`An error occured: ${e}`);
});
