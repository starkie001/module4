let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function getNews() {
  return new Promise((resolve) => {
    setTimeout(function () {
      // resolve the promise with the news data after 5s
      resolve(news);
    }, 5000);
  });
}

// get data asynchronously, then console.log for testing
getNews().then((news) => console.log(news));
