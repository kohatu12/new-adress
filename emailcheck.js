function subscribe(inputId) {
	// Получаем значение из соответствующего поля ввода email
	let emailInput = document.getElementById(inputId);
	let email = emailInput.value;

	// Проверяем, является ли введенный текст действительным email адресом
	if (validateEmail(email)) {
		// Если действительный, выводим успешное уведомление
		alert('Подписка успешна!');

		// Очищаем поле ввода email
		emailInput.value = '';

		// В этом месте вы можете добавить дополнительные действия, связанные с успешной подпиской

	} else {
		// Если не является действительным email адресом, выводим уведомление
		alert('Пожалуйста, введите корректный email адрес.');
		emailInput.value = '';
	}
}

// Функция для проверки действительности email адреса
function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}