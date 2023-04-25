let list = document.querySelector("#parentLi");
let childs = list.childNodes;
let children = list.children;
console.log(childs);
console.log(children);
list.removeChild(childs[3]);