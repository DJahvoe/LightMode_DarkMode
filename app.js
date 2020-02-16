const moonPath =
	'M50.5 105C50.5 162.99 105 210 105 210C47.0101 210 0 162.99 0 105C0 47.0101 47.0101 7.62939e-06 105 7.62939e-06C105 7.62939e-06 50.5 47.0101 50.5 105Z';

const sunPath =
	'M210 105C210 162.99 162.99 210 105 210C47.0101 210 0 162.99 0 105C0 47.0101 47.0101 0 105 0C162.99 0 210 47.0101 210 105Z';

const darkMode = document.querySelector('#darkMode');
let toggle = false;
let text = 'Light Mode';

const sectionTitle = document.querySelector('h1');

anime({
	targets: [
		'.svg-attributes-demo polygon',
		'feTurbulence',
		'feDisplacementMap'
	],
	points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
	baseFrequency: 0,
	scale: 1,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutExpo'
});

// CLICK SUN
darkMode.addEventListener('click', () => {
	// anime.js

	// Setting timeline
	const timeline = anime.timeline({
		duration: 750,
		easing: 'easeOutExpo'
	});

	// Add different animation to the timeline
	timeline
		.add({
			targets: '.sun',
			d: [{ value: toggle ? sunPath : moonPath }]
		})
		.add(
			{
				targets: '#darkMode',
				rotate: toggle ? 0 : 320
				// translateX: toggle ? -250 : 250
			},
			'-= 350'
		)
		.add(
			{
				targets: 'section',
				backgroundColor: toggle ? 'rgb(180,180,180)' : 'rgb(22,22,22)',
				color: toggle ? 'rgb(22,22,22)' : 'rgb(180,180,180)'
			},
			'-= 700'
		)
		.add({
			targets: ''
		});

	// Toggle switch
	if (!toggle) {
		// Dark Mode became True
		toggle = true;
		text = 'Dark Mode';
	} else {
		// Dark Mode became False
		toggle = false;
		text = 'Light Mode';
	}
	sectionTitle.innerHTML = text;
});
