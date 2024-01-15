const chooseColor = document.querySelectorAll('.choose-color__btn')
const contentItem = document.querySelectorAll('.content-item')

chooseColor.forEach(el => {
	el.addEventListener('click', open)
})

function open(event) {
	const target = event.currentTarget
	const btn = target.dataset.button
	const contentActive = document.querySelectorAll(`.${btn}`)

	chooseColor.forEach(el => {
		el.classList.remove('choose-color__btn--active')
	})

	target.classList.add('choose-color__btn--active')

	contentItem.forEach(el => {
		el.classList.remove('content-item__active')
	})

	contentActive.forEach(el => {
		el.classList.add('content-item__active')
	})
}
