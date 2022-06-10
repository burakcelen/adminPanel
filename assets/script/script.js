var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");

function validateMail() {
	var email = document.getElementById("form-email").value;
	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = "Invalid";
		return false;
	}
	if (email == "") {
		emailError.innerHTML = "";
	}
	emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
}
function validatePassword() {
	var password = document.getElementById("form-password").value;
	if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
		passwordError.innerHTML = "Invalid";
		return false;
	}
	passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
}
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 50,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
