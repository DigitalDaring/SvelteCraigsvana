import cars from './_cars.js';

const contents = JSON.stringify(cars.map(car => (
	{
		...car,
		cover: car.photos[0]
	}
)));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}