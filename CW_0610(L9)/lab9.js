class PrintMachine {
  constructor(fontsize, color, fontfamily) {
    this.fontsize = fontsize;
    this.color = color;
    this.fontfamily = fontfamily;
  }
  print(msg) {
    document.write(
      `<span style="font-size: ${this.fontsize}; color: ${this.color}; font-family: ${this.fontfamily}">${msg}</span>`
    );
  }
}
let priter = new PrintMachine("12px", "red", "sans-serif");
// priter.print("My message");

class News {
  constructor(header, pbl_date, body, tegs) {
    this.header = header;
    this.pbl_date = pbl_date;
    this.body = body;
    this.tegs = tegs;
  }
  print() {
    let date = "";
    if (
      new Date(this.pbl_date).toLocaleDateString() ==
      new Date().toLocaleDateString()
    )
      date = "now";
    else if (
      Math.floor(
        (new Date() - new Date(this.pbl_date)) / (24 * 60 * 60 * 1000)
      ) >= 1 &&
      Math.floor(
        (new Date() - new Date(this.pbl_date)) / (24 * 60 * 60 * 1000)
      ) < 7
    )
      date = `${Math.floor(
        (new Date() - new Date(this.pbl_date)) / (24 * 60 * 60 * 1000)
      )} days ago`;
    else date = new Date(this.pbl_date).toLocaleDateString();
    document.write(
      `<h3>${this.header}</h3>
    <p>${date}</p>
    <p style ="text-align: justify; margin: 40px">${this.body}</p>
    <p>${this.tegs}</p>`
    );
  }
}

let newsNow = new News("", "", "", [""]);
newsNow.header = "Lorem, ipsum dolor.";
newsNow.pbl_date = "10/06/2022";
newsNow.body =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis et perspiciatis dolor eligendi nobis? Asperiores optio dolor vitae facere velit atque ipsum saepe neque, dolores, dolore, aperiam perferendis sequi!";
newsNow.tegs[0] = "#lorem";
newsNow.tegs[1] = "#ipsum";
newsNow.tegs[2] = "#text";

let news0510 = new News("", "", "", [""]);
news0510.header = "news0510, ipsum dolor.";
news0510.pbl_date = "10/05/2022";
news0510.body =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis et perspiciatis dolor eligendi nobis? Asperiores optio dolor vitae facere velit atque ipsum saepe neque, dolores, dolore, aperiam perferendis sequi!";
news0510.tegs[0] = "#lorem";
news0510.tegs[1] = "#ipsum";
news0510.tegs[2] = "#lord";
//   newsNow.print();

function newsComparer(news1, news2) {
  if (news1.pbl_date > news2.pbl_date) return -1;
  else if (news1.pbl_date < news2.pbl_date) return 1;
  else return 0;
}

class NewsList {
  #countNews;
  constructor(News = []) {
    this.News = News;
    this.#countNews = News.length;
  }
  printTitle() {
    for (let newsElement of this.News) {
      document.write(
        `<p>...<b>
                    ${newsElement.header}
                    </b>...
                    </p>
                    `
      );
    }
  }
  print() {
    for (let newsElement of this.News) {
        newsElement.print();
    }
  }
  addNews(News) {
    this.News[this.News.length] = News;
    this.#countNews++;
  }
  removeNews(News){
    let ID = this.News.indexOf(News);
    let tmp = [];
    for(let i=0;i<this.News.length;i++){
        if(i!=ID)
        tmp.push(this.News[i]);
    }
    this.News = tmp;
    this.#countNews--;
  }
  orderedNews() {
    this.News.sort(newsComparer);
  }
  findNews(teg) {
    let newsTegArr = [];
    for (let newsElement of this.News) {
      if (newsElement.tegs.indexOf(teg) != -1) {
        newsTegArr.push(newsElement);
      }
    }
    return newsTegArr;
  }
  get countNews() {
    return this.#countNews;
  }
}

let someNews = new NewsList([news0510, news0510, newsNow]);
someNews.printTitle();
document.write(`${someNews.countNews}`);
someNews.print();
someNews.addNews(newsNow);
someNews.printTitle();
document.write(`${someNews.countNews}`);
someNews.removeNews(news0510);
someNews.printTitle();
document.write(`${someNews.countNews}`);
someNews.orderedNews();
someNews.printTitle();
for(let newsElement of someNews.findNews("#lord")){
    newsElement.print();
}
