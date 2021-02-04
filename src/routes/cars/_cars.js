// Leading underscore tells Sapper this isn't a route

const cars = [
	{
		slug: '2005-gto',
		ymm: '2005 Pontiac GTO',
		year: 2005,
		price: 600,
		description: '05 Gto chassis and a ton of parts. Race car project or cut it up to save another. No motor no seats no title. There are more parts that go with it not photos like a door trim panels, a radio and so on. Malibu is sold but I have another g body or two if you’re interested. Thanks for looking!',
		photos: ['gto_1.jpg', 'gto_2.jpg', 'gto_3.jpg']
	},
	{
		slug: '1984-fiero',
		ymm: '1984 Pontiac Fiero',
		year: 1984,
		price: 1000,
		description: `***PRICE REDUCED *** HAVE A PAIR OF 1984 FIEROS, *** RED ONE AND BLACK ONE,****REDUCED TO *** $1500 FOR THE PAIR AS IS **** NOT RUNNING, ARIZONA CARS,
		FOUR CYLINDER, AUTOMATIC , A/C *** CHOICE $1500 EACH OR ***$2500 (obo ) FOR THE PAIR***`,
		photos: ['fiero_1.jpg', 'fiero_2.jpg']
	},
	{
		slug: '2002-crown-vic',
		ymm: '2002 Ford Crown Victoria',
		year: 2002,
		price: 1000,
		description: 'Bought car 11 years ago, well maintained, just had intake manifold done, mechanic says some kind of engine noise, possible engine knock.',
		photos: ['vic_1.jpg']
	},
	{
		slug: '2003-eclipse',
		ymm: '2003 Mitsubishi Eclipse',
		year: 2003,
		price: 1000,
		description: `I have a 2003 Mitsubishi Eclipse for sale. It is in fair condition and runs pretty well no motor problems, may need a new battery is missing turn signal lever next to steering wheel and has some body damage. It is 5 speed manual transmission and has been running fine since I've had it. I'm asking for 1000 obo`,
		photos: ['eclipse_1.jpg', 'eclipse_2.jpg']
	}
];

export default cars;
