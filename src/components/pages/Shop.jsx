import React, { useEffect } from 'react'
import { useState } from 'react'
import SecondaryButton from '../atoms/SecondaryButton'

import CheckIcon from '../icons/special/CheckIcon'
import DeleteIcon from '../icons/special/DeleteIcon'
import PaymentIcon from '../icons/static/PaymentIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const Shop = () => {

	const [arrAddCart, setArrAddCart] = useState(() => JSON.parse(localStorage.getItem("cart")))
	const [priceAllCart, setpriceAllCart] = useState(0)

	console.log(arrAddCart);

	useEffect(() => {

		const arrObjectWithPriceTrue = arrAddCart.filter( object => object.stateItem === true );
		const arrPrices = arrObjectWithPriceTrue.map( arr => arr.priceItem )
		const sumTotal = arrPrices.reduce( (a,b) => Number(a) + Number(b),0 )
		setpriceAllCart(sumTotal);

	}, [arrAddCart])

	const handleDelete = e => {

		e.preventDefault();
		const arrNameDetailSubs = arrAddCart.filter( c => c.nameItem !== e.target.id);
		localStorage.setItem("cart", JSON.stringify(arrNameDetailSubs));
		setArrAddCart(JSON.parse(localStorage.getItem("cart")));

	}

	return (
		<>
			<HeaderMenu status="shop" />
			<main className="main-container shoppage">
				<section className="section-shop ed-grid s-grid-12">

					{
						(arrAddCart.length > 0) ? (
							<>
							<h2 className="title-color s-cols-12">Añadidos al carrito</h2>

							<div className="shop-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8  pt-24">

								{
									arrAddCart.map( (itemArrDetails, i) => (
										<div key={i} className="shop-services s-cols-12 ed-grid s-grid-4 s-gap-4">
											<div className="shop-services__list s-cols-2">
												<CheckIcon otherClass="check-content-color" containerClass="check-container" />
												<h3 className="content-color">{itemArrDetails.nameItem} ({itemArrDetails.tagItem}) </h3>
											</div>
											<h3 className="shop-services__price content-color m-cols-1 m-main-end m-x-3">$ {itemArrDetails.priceItem}</h3>
											<div className="shop-services__delete s-main-end s-x-4 s-cols-1">
												<DeleteIcon myId={itemArrDetails.nameItem} event={handleDelete} />
											</div>
											<div className="p-relative shop-services__section-details s-cols-3 m-cols-2">
												{
													itemArrDetails.detailItem.map( (myItem, index) => (
														<h4 key={index} className="details__description content-color s-pl-2">{ myItem.detail }</h4>
													))
												}
											</div>
										</div>
									))
								}
							</div>

							<div className="shop-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
								<h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
								<h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">$ { priceAllCart.toFixed(2) }</h3>
							</div>

							<SecondaryButton urlTo="#" icon={ <PaymentIcon /> } title="Añade un método de pago" othersClass="mt-32 inactive-color s-cols-12 s-to-right"/>
							<h6 className="title-color s-cols-12 s-to-right">*Opción aún no habilitada</h6>
							</>
						) : (
							<>
							<h1 className="title-color s-center s-cols-12">Tu carrito está vacio</h1>
							<h3 className="content-color s-center s-cols-12">Te invito a que visites estos enlaces para agregar productos a él.</h3>
							<div className="container-buttons s-center mt-32 s-cols-12">
								<SecondaryButton urlTo="/models" othersClass="" title="Modelos" />
							</div>
							<div className="container-buttons s-center mt-32 s-cols-12">
								<SecondaryButton urlTo="/maintenances" othersClass="" title="Mantenimiento" />
							</div>
							<div className="container-buttons s-center mt-32 s-cols-12">
								<SecondaryButton urlTo="/discounts" othersClass="" title="Descuentos" />
							</div>
							</>
						)
					}

				</section>
			</main>
			<FooterMenu />
		</>
	)
}
