// Отправка заявки 
$(document).ready(function() {
	$("#form").submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}		
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоров мы с вами свяжемсяю.");			
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
	$('[name="phone"]').mask("+7(999) 999-9999");
});
