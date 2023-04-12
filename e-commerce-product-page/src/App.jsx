import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Menu from './components/Menu';
import data from './data';
import CartItem from './components/CartItem';
import { nanoid } from 'nanoid';

const App = () => {
	// state to toggle cart display
	const [ activeCart, setActiveCart ] = useState(false);
	// state to toggle menu display
	const [ menu, setMenu ] = useState(false);
	// state for products array
	const [ products, setProducts ] = useState(data);
	// state to track picture slider
	const [ currentSlide, setCurrentSlide ] = useState(0);
	// state to track lightbox gallery
	const [ lightBox, setLightBox ] = useState(false);
	// track order number
	const [ orderNumber, setOrderNumber ] = useState(0);
	// track cart array
	const [ cart, setCart ] = useState([]);
	// track total cart number
	const [ cartTotal, setCartTotal ] = useState(0);

	// add to crt function
	const addToCart = (product, id) => {
		// return nothing is order number is 0
		if (orderNumber === 0) {
			return;
		} else if (cart.some((item) => item.id === id)) {
			// if order is already present, increase order number and not duplicate order item
			// search if order already exists
			// if it exists, find the item that exist
			const updatedCart = cart.map((item) => {
				if (item.id === id) {
					// updates quantity
					const updatedQuantity = item.quantity + orderNumber;
					return {
						// input quantity into cart
						...item,
						quantity: updatedQuantity,
						total: updatedQuantity * item.price
					};
				}
				// return the item if no changes to prevent loss
				return item;
			});
			// update cart and set order number to 0
			setCart(updatedCart);
			setOrderNumber(0);
		} else {
			// if order doesn't exists, add order to cart
			const updatedProduct = {
				...product,
				quantity: orderNumber,
				total: orderNumber * product.price
			};
			setCart([ ...cart, updatedProduct ]);
			setOrderNumber(0);
		}
	};

	// run through cart and add quantity of each product and sum it all
	const calculateCartTotal = (cart) => {
		let total = 0;
		cart.forEach((item) => {
			total += item.quantity;
		});
		return total;
	};

	// update cartTotal whenever cart changes
	useEffect(
		() => {
			setCartTotal(calculateCartTotal(cart));
		},
		[ cart ]
	);

	// run through cart, find corresponding item and delete
	const deleteOrder = (id) => {
		const updatedCart = cart.filter((item) => item.id !== id);
		setCart(updatedCart);
	};

	// run through cart array and display each object
	const cartItems = cart.map((item) => {
		return <CartItem key={nanoid()} item={item} deleteOrder={deleteOrder} />;
	});

	// increase orderNumber
	const addOrderNumber = () => {
		setOrderNumber((prev) => prev + 1);
	};

	// decrease orderNumber
	const minusOrderNumber = () => {
		if (orderNumber !== 0) {
			setOrderNumber((prev) => prev - 1);
		}
		return;
	};

	// technically display each product in products array
	const newProducts = products.map((item) => {
		return (
			<ProductPage
				key={item.id}
				product={item}
				lightBox={lightBox}
				setLightBox={setLightBox}
				currentSlide={currentSlide}
				orderNumber={orderNumber}
				setCurrentSlide={setCurrentSlide}
				addOrderNumber={addOrderNumber}
				minusOrderNumber={minusOrderNumber}
				addToCart={addToCart}
			/>
		);
	});

	// Local Storage
	useEffect(() => {
		const storedCart = localStorage.getItem('cart');
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<section id="root" className="bg-white w-full md:px-32 relative" >
			<Header setMenu={setMenu} setActiveCart={setActiveCart} cartTotal={cartTotal} />
			{newProducts}
			{menu && <Menu setMenu={setMenu} menu={menu} />}
			{activeCart && <Cart cart={cart} cartItems={cartItems} deleteOrder={deleteOrder} />}
		</section>
	);
};

export default App;
