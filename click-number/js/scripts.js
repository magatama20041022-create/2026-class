const buttons = [];
const buttonSize = 60;
const gravity = 0.4;

for (var num = 9; num > 0; num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.id = String(num);
	elm.className = "circle";
	var colors = ['#ff6666', '#66ccff', '#99ff99', '#ffcc66', '#cc99ff', '#ff99cc', '#66ffcc', '#cccc66', '#66aaff'];
	elm.style.backgroundColor = colors[(num - 1) % colors.length];
	elm.onclick = function () {
		document.remove(Number(this.id));
	};
	document.getElementById("main").appendChild(elm);

	var left_pos = 10 + Math.floor(Math.random() * 600);
	var top_pos = 20 + Math.floor(Math.random() * 150);

	buttons.push({
		id: num,
		elm: elm,
		x: left_pos,
		y: top_pos,
		vy: 0,
	});

	elm.style.left = left_pos + "px";
	elm.style.top = top_pos + "px";
}

function update() {
	const bottom = window.innerHeight - buttonSize;

	buttons.forEach(function (obj) {
		obj.vy += gravity;
		obj.y += obj.vy;

		if (obj.y > bottom) {
			obj.y = bottom;
			obj.vy = -obj.vy;
		}

		obj.elm.style.top = obj.y + "px";
	});

	requestAnimationFrame(update);
}

update();

var next = 1;
document.remove = function (id) {
	if (id === next) {
		var elem = document.getElementById(id);
		if (elem) {
			document.getElementById("main").removeChild(elem);
		}
		next = next + 1;

		var index = buttons.findIndex(function (obj) {
			return obj.id === id;
		});
		if (index !== -1) {
			buttons.splice(index, 1);
		}
	}
};