document.addEventListener('DOMContentLoaded', () => {
	const contactForm = document.getElementById('contact-form')
	if (contactForm) {
		contactForm.addEventListener('submit', (event) => {
			event.preventDefault()
			const formData = new FormData(contactForm)
			const data = Object.fromEntries(formData.entries())
			console.table(data)
		})
	}
})

const toggleButton = document.getElementById('hamborgerbutton')
const mobileMenu = document.getElementById('mobilemenu')


toggleButton.addEventListener('click', () => {
	
	mobileMenu.classList.toggle('hidden')
	mobileMenu.classList.toggle('flex')
})

const submitButton = document.getElementById('submitbutton')

submitButton.addEventListener('click', () => {	
	alert('Your message has been sent!')
})
