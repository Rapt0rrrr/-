// Нужна такая конструкция для того, чтобы скрипты отрабатывали только после полной загрузки DOM дерева
window.addEventListener("DOMContentLoaded", () => {
	const topButton = document.getElementById("back_to_top");

	// Функция, отрабатывающая при скролле страницы
	function onScrollDocument() {
		const scrolledHeight = document.documentElement.scrollTop;
		const TRIGGER_HEIGHT = 200;

		if (scrolledHeight > TRIGGER_HEIGHT) {
			topButton.classList.add("active");
		} else {
			topButton.classList.remove("active");
		}
	}

	// Функция, отрабатывающая по клику на кнопку скрола наверх
	function onClickTopButton() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	// Вешаем событие скролла на весь документ
	document.addEventListener("scroll", onScrollDocument);
	// Вешаем событие клика на кнопку
	topButton.addEventListener("click", onClickTopButton);
});
