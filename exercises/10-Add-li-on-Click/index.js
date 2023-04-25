let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let li = document.createElement("li");
	li.innerHTML = "item"
	list.appendChild(li);

	// let p = document.createElement("p");
	// p.style.background = "yellow";
	// p.innerHTML = "Hello World";
	// document.body.appendChild(p);


});
