// Your code here
let input = document.querySelector("#addToDo");
let list = document.querySelector("ul");


function addEventListenerClickRemove() {
	var deleteButtons = document.querySelectorAll('.fa-trash');

	deleteButtons.forEach((el) =>{
		el.addEventListener("click", (event)=>{

			let li = el.parentNode.parentNode;
			li.remove();
			
		})
	})
}

input.addEventListener("keydown", function addTask(e) {
	if (e.key === "Enter") {
		let list = document.querySelector("ul");
		let li = document.createElement("li");
		li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${input.value}`;
		list.appendChild(li);
		input.value = "";
		addEventListenerClickRemove();


	}
});



addEventListenerClickRemove();



