import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopNav = ( {width, status} ) => {

	const arrAddCart = useSelector(() => JSON.parse(localStorage.getItem("cart")));

	return (
		<>
		<Link to="/shop" className={ `${status} container-icon-shopnav`}>
			<div className="container__svg">
				<svg width={width} height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="currentColor" d="M27.6725 18.4784L29.9705 7.10338C30.1364 6.28209 29.5815 5.5 28.8329 5.5H9.73928L9.29371 3.04945C9.18268 2.43865 8.70493 2 8.15072 2H3.16667C2.52233 2 2 2.58762 2 3.3125V4.1875C2 4.91238 2.52233 5.5 3.16667 5.5H6.56376L9.97859 24.2816C9.16163 24.8102 8.61111 25.8012 8.61111 26.9375C8.61111 28.6289 9.82989 30 11.3333 30C12.8368 30 14.0556 28.6289 14.0556 26.9375C14.0556 26.0803 13.7422 25.3059 13.2377 24.75H23.4289C22.9245 25.3059 22.6111 26.0803 22.6111 26.9375C22.6111 28.6289 23.8299 30 25.3333 30C26.8368 30 28.0556 28.6289 28.0556 26.9375C28.0556 25.725 27.4291 24.6772 26.5205 24.181L26.7887 22.8534C26.9546 22.0321 26.3997 21.25 25.651 21.25H12.6029L12.2848 19.5H26.5349C27.0796 19.5 27.5518 19.076 27.6725 18.4784Z" />
				</svg>
			</div>
			<span className="circle__icon">{arrAddCart.length}</span>
		</Link>
		</>
	)
}

ShopNav.defaultProps = {
	status: "",
	width: '24',
	count: 0
}

export default ShopNav;
