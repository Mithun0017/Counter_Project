const decreasebtn = document.getElementById("decrease1");
const resetbtn = document.getElementById("reset1");
const increasebtn = document.getElementById("increase1"); 
const countlabel = document.getElementById("countlabel1");

let count = 0;

increasebtn.onclick = function() {
	count++;
	countlabel.textContent = count;
};

resetbtn.onclick = function() {
	count = 0;
	countlabel.textContent = count;
};

decreasebtn.onclick = function() {
	count--;
	countlabel.textContent = count;
};