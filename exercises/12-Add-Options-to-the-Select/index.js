let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let option = document.querySelector("#mySelect");
for (let i = 0; i < countries.length; i++) {
    var country = document.createElement("option")
    country.innerHTML = countries[i];
    country.value = countries[i];
    option.appendChild(country);
    
}

option.addEventListener("change", function() {
	//your code here
    alert(option.value);

	


});
