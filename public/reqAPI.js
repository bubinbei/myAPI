// const url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2021-03-25&' +
//           'sortBy=popularity&' +
//           'apiKey=0cbd154852994cc1a1136e598161d249';

const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ru&' +
            'apiKey=0cbd154852994cc1a1136e598161d249';

const req = new Request(url);

let ul = document.querySelector("ul");
let title = document.querySelector('.title')


const asyncfunc = async () => {
  const res = await fetch(req)
  const data = await res.json()
  for(let i = 0 ; i < data.articles.length ; i++) {
          let item = document.createElement('li');
          let div = document.createElement('div')
            item.style.backgroundImage = `url('${data.articles[i].urlToImage}')`;
            item.style.backgroundSize = 'cover'
          // console.log(data.articles[i].urlToImage);
          div.style.width = '400px'
          div.style.zIndex = '2'
          // div.innerHTML = data.articles[i].title;
          div.innerHTML = data.articles[i].description;
          
          item.append(div)
          ul.append(item);
        }
        
      }
asyncfunc()
