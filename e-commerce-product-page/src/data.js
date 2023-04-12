import {
	imageProduct1,
	imageProduct2,
	imageProduct3,
	imageProduct4,
	imageProduct1Thumbnail,
	imageProduct2Thumbnail,
	imageProduct3Thumbnail,
	imageProduct4Thumbnail
} from './assets';

const data = [
	{
		id: '1',
		company: 'SNEAKERS COMPANY',
		edition: 'Fall Limited Edition Sneakers',
		description: `These low-profile sneakers are 
        your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they'll withstand 
        everything the weather can offer.`,
		price: 125.0,
		discount: '50%',
		oldPrice: 250.0,
		images: [
			{ image: imageProduct1, thumbnail: imageProduct1Thumbnail },
			{ image: imageProduct2, thumbnail: imageProduct2Thumbnail },
			{ image: imageProduct3, thumbnail: imageProduct3Thumbnail },
			{ image: imageProduct4, thumbnail: imageProduct4Thumbnail }
		],
		quantity: 0,
		total: 0
	}
];

export default data;
