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