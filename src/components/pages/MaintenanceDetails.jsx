import React, { useEffect, useState } from 'react'
import SecondaryButton from '../atoms/SecondaryButton'
import CheckIcon from '../icons/special/CheckIcon'
import CancelIcon from '../icons/static/CancelIcon'
import ShopIcon from '../icons/static/ShopIcon'
import SuccessIcon from '../icons/static/SuccessIcon'
import FooterMenu from '../molecules/FooterMenu'
import HeaderMenu from '../molecules/HeaderMenu'

export const MaintenanceDetails = () => {

	const [check, setCheck] = useState(() => JSON.parse(localStorage.getItem("maintenance")))

	useEffect(() => {

		if( check === null ) {

			localStorage.setItem("maintenance", {
				neumaticos: true,
				asientos: true,
				volante: true,
				frenos: true,
				parabrisas: true,
				motor: true
			})

			setCheck({
				neumaticos: true,
				asientos: true,
				volante: true,
				frenos: true,
				parabrisas: true,
				motor: true
			})

		}else {
			localStorage.setItem("maintenance", JSON.stringify(check))
		}

	}, [check])

	return (
		<>
			<HeaderMenu status="maintenance" />
			<main className="main-container maintenancedetails">
				<section className="section-maintenance-details ed-grid s-grid-12">
					<h2 className="title-color s-cols-12">Mantenimiento Avanzado</h2>
					<h3 className="content-color s-cols-12 pt-24">Aquí podrás personalizar que servicios deseas agregar(<SuccessIcon otherClass="icon-select" />) o quitar(<CancelIcon otherClass="icon-select" />) de este paquete.</h3>

					<div className="maintenance-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8 pt-20">
						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Neumáticos</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, neumaticos : !check?.neumaticos}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.neumaticos === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.neumaticos === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>

						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Asientos</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, asientos : !check?.asientos}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.asientos === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.asientos === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>

						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Volante</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, volante : !check?.volante}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.volante === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.volante === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>

						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Frenos</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, frenos : !check?.frenos}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.frenos === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.frenos === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>

						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Parabrisas</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, parabrisas : !check?.parabrisas}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.parabrisas === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.parabrisas === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>

						<div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
							<div className="maintenance-services__list s-cols-2">
								<CheckIcon otherClass="check-content-color" containerClass="check-container" />
								<h3 className="content-color">Motor</h3>
							</div>
							<h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">$ 1000000.00</h3>
							<div onClick={ () => setCheck({...check, motor : !check?.motor}) } className="maintenance-services__delete s-main-end s-x-4 s-cols-1">
								{
									check?.motor === true ? <SuccessIcon width={32} /> : <CancelIcon width={32} />
								}
							</div>
							<div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
								<h4 className="details__description content-color s-pl-2">
									{
										check?.motor === true ? "incluido" : "no incluido"
									}
								</h4>
							</div>
						</div>
					</div>

					<div className="maintenance-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
						<h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
						<h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">$ 23000000.00</h3>
					</div>

					<div className="maintenance-container-button s-cols-12 s-main-end">
						<SecondaryButton icon={ <ShopIcon /> } title="Añádelo al carrito" othersClass="mt-32"/>
					</div>

				</section>
			</main>
			<FooterMenu />
		</>
	)
}
