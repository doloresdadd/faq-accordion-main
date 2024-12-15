var acc = document.getElementsByClassName('accordion-header');

var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle('active');

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'block';
		}

		var plus = this.getElementsByClassName('icon-plus');
		var minus = this.getElementsByClassName('icon-minus');

		var plusInst = plus[0];
		var minusInst = minus[0];

		if (plusInst.style.display === '' || plusInst.style.display === 'block') {
			plusInst.style.display = 'none';
			minusInst.style.display = 'block';
		} else {
			plusInst.style.display = 'block';
			minusInst.style.display = 'none';
		}
	});
}
