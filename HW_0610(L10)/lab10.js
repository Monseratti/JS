class Button {
  constructor(heigth, width, content) {
    this.heigth = heigth;
    this.width = width;
    this.content = content;
  }
  showBtn() {
    document.write(
      `<button style="height: ${this.heigth};width:${this.width}">${this.content}</button>`
    );
  }
}
let btn = new Button("100px", "100px", "My button");
// btn.showBtn();

class BootstrapButton extends Button {
  constructor(heigth, width, content, color) {
    super(heigth, width, content);
    this.color = color;
  }
  showBtn() {
    document.write(
      `<button style="color:${this.color};height: ${this.heigth};width:${this.width}">${this.content}</button>`
    );
  }
}
let btstrBtn = new BootstrapButton("70px", "100px", "My button", "lightgreen");
// btstrBtn.showBtn();

class Line {
  #name;
  constructor(a) {
    this.a = a;
    this.#name = "Line";
  }
  lineWidth(a) {
    return Math.round(
      Math.sqrt(Math.pow(a.Y.x - a.X.x, 2) + Math.pow(a.Y.y - a.X.y, 2))
    );
  }
  print() {
    document.write(`${this.name} have width is ${this.lineWidth(this.a)}`);
  }
  set name(Name) {
    this.#name = Name;
  }
  get name() {
    return this.#name;
  }
}
class Square extends Line {
  constructor(a) {
    super(a);
    this.name = "Square";
  }
  perimeter() {
    return 4 * this.lineWidth(this.a);
  }
  area() {
    return Math.pow(this.lineWidth(this.a), 2);
  }
  print() {
    document.write(
      `<p>${this.name}: perimeter ${this.perimeter()}, area ${this.area()}</p>`
    );
  }
}
class Rectangle extends Line {
  constructor(a, b) {
    super(a);
    this.b = b;
    this.name = "Rectangle";
  }
  perimeter() {
    return 2 * this.lineWidth(this.a) + 2 * this.lineWidth(this.b);
  }
  area() {
    return this.lineWidth(this.a) * this.lineWidth(this.b);
  }
  print() {
    document.write(
      `<p>${this.name}: perimeter ${this.perimeter()}, area ${this.area()}</p>`
    );
  }
}
class Triangle extends Line {
  constructor(a, b, c) {
    super(a);
    this.b = b;
    this.c = c;
    this.name = "Triangle";
  }
  perimeter() {
    return (
      this.lineWidth(this.a) + this.lineWidth(this.b) + this.lineWidth(this.c)
    );
  }

  area() {
    let p = this.perimeter() / 2;
    return Math.round(
      Math.sqrt(
        p *
          (p - this.lineWidth(this.a)) *
          (p - this.lineWidth(this.b)) *
          (p - this.lineWidth(this.c))
      )
    );
  }
  print() {
    document.write(
      `<p>${this.name}: perimeter ${this.perimeter()}, area ${this.area()}</p>`
    );
  }
}

var a = {
  X: {
    x: 2,
    y: 2,
  },
  Y: {
    x: 5,
    y: 10,
  },
};
var b = {
  X: {
    x: 3,
    y: 4,
  },
  Y: {
    x: 8,
    y: 6,
  },
};
var c = {
  X: {
    x: -7,
    y: 3,
  },
  Y: {
    x: 4,
    y: 7,
  },
};

let square = new Square(a);
let rectangle = new Rectangle(a, b);
let triangle = new Triangle(a, b, c);

square.print();
rectangle.print();
triangle.print();

class ExendedArray extends Array {
  getString(separator) {
    let pr = "";
    for (let arrElement of this) {
      pr += `${arrElement}${separator}`;
    }
    return pr;
  }
  getHtml(tagName) {
    let pr = "";
    if (tagName == "li") {
      pr += `<ul><li>${this.join("<li>")}</ul>`;
    } else {
      for (let arrElement of this) {
        pr += `<${tagName}>${arrElement}</${tagName}>`;
      }
    }
    return pr;
  }
}
let tmp = new ExendedArray();
tmp[0] = 1;
tmp[1] = 7;
tmp[2] = 5;
tmp[3] = 2;
tmp[4] = 3;
tmp[5] = 4;
tmp[6] = 6;
//document.write(`${tmp.getString("+")}`);
//document.write(tmp.getHtml("span"));
