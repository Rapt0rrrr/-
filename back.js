// Нужна такая конструкция для того, чтобы скрипты отрабатывали только после полной загрузки DOM дерева
window.addEventListener("DOMContentLoaded", () => {
	const topButton = document.getElementById("back_to_top");

	document.addEventListener("scroll", () => {
		const scrolledHeight = document.documentElement.scrollTop;
		const TRIGGER_HEIGHT = 200;

		if (scrolledHeight > TRIGGER_HEIGHT) {
			topButton.classList.add("active");
		} else {
			topButton.classList.remove("active");
		}
	});
});
