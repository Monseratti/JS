let fruits = [];
fruits.push({ id: 0, name: "Apple", price: 1.03 });
fruits.push({ id: 1, name: "Apple1", price: 1.1 });
fruits.push({ id: 2, name: "Apple2", price: 1.41 });
fruits.push({ id: 3, name: "Apple3", price: 2.03 });
fruits.push({ id: 4, name: "Apple5", price: 1.11 });
fruits.push({ id: 5, name: "Apple4", price: 4.87 });
fruits.push({ id: 6, name: "Apple6", price: 2.47 });
fruits.push({ id: 7, name: "Apple9", price: 1.12 });
fruits.push({ id: 8, name: "Apple7", price: 7.4 });
fruits.push({ id: 9, name: "Apple8", price: 3.03 });

let info_body = document.getElementsByClassName("info_body")[0];

function Start() {
  for (let el of fruits) {
    let fruit = document.createElement("div");
    fruit.classList.add("fruit");
    let fruit_id = document.createElement("p");
    fruit_id.innerHTML = `#${el.id}`;
    fruit_id.className = "fruit_id";
    let fruit_name = document.createElement("p");
    fruit_name.innerHTML = `<b>${el.name}</b>`;
    fruit_name.className = "fruit_name";
    let fruit_price = document.createElement("p");
    fruit_price.innerHTML = `$${el.price}`;
    fruit_price.className = "fruit_price";
    fruit.appendChild(fruit_id);
    fruit.appendChild(fruit_name);
    fruit.appendChild(fruit_price);
    info_body.appendChild(fruit);
  }
}

document.getElementById("btn").addEventListener("click", function(e, arr = fruits){
  console.log(arr);
  arr = arr.sort((a, b) => {
    let sortBy = document.getElementById("sortBy");
    switch (sortBy.value) {
      case "id":
        {
          if (a.id > b.id) return 1;
          else if (a.id < b.id) return -1;
          else return 0;
        }
        break;
      case "name":
        {
          if (a.name > b.name) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        }
        break;
      case "price":
        {
          if (a.price > b.price) return 1;
          else if (a.price < b.price) return -1;
          else return 0;
        }
        break;
    }
  });
  console.log(`1`);
  for (i = info_body.children.length - 1; i >= 0; i--) {
    info_body.removeChild(info_body.children[i]);
  }
  Start();
});
