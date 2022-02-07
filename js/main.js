function start() {
	window.addEventListener("click", function(event) {
		let toggler = document.getElementById("menu-toggle");
		if (toggler.checked) {
			if (event.target.closest("#menu-button") && event.target.tagName !== "A") {
				return;
			}
			toggler.checked = false;
		}
	});
}

window.onload = start;

