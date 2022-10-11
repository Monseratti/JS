var count = 0;
document.getElementsByTagName("button")[0].addEventListener(
    "click", function(){
        let node = document.createElement("li");
        let list = document.getElementById("list");
        let innerChild;
        node.innerText = `Insert element ${count+1}`;
        innerChild = list.childNodes[Math.round(list.childNodes.length/2)];
        list.insertBefore(node, innerChild);
        count++;
    }
);