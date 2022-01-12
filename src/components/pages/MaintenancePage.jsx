
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { startMaintenanceAdvancedData } from '../../actions/maintenanceAdvanced';
import { startMaintenanceBasicData } from '../../actions/maintenanceBasic';
import { SectionMaintenanceAdvanced } from '../organisms/SectionMaintenanceAdvanced';
import { SectionMaintenanceBasic } from '../organisms/SectionMaintenanceBasic';
import SkeletonMaintenance from '../skeletons/SkeletonMaintenance';
import { useFetchAllMaintenances } from '../../hooks/useFetchAllMaintenances';

const MaintenancePage = () => {

	const dispatch = useDispatch();
	const { data, loading } = useFetchAllMaintenances();
	const [arrSkeleton, setArrSkeleton] = useState({
		arrBasicSheleton: 4,
		arrAdvancedSkeleton: 6
	});
	const [mainMaintenanceCart, setMainMaintenanceCart] = useState(() => JSON.parse(localStorage.getItem("cart")));
	const [showButtons, setShowButtons] = useState(() => JSON.parse(localStorage.getItem("stateButtonsMaintenance")));
	const { arrayDetails: arrBasic } = useSelector(state => state.dataMaintenanceBasic);

	useEffect(() => {

		if( data.length > 0 ){

			dispatch(startMaintenanceBasicData(data[0]?.nameMaintenance));
			dispatch( startMaintenanceAdvancedData(data[1]?.nameMaintenance) );
			setArrSkeleton({
				arrBasicSheleton: data[0].arrayDetails.length,
				arrAdvancedSkeleton: data[1].arrayDetails.length,
			});

		}

	}, [data, dispatch])

	useEffect(() => {

		if( showButtons === null ) {

			localStorage.setItem("stateButtonsMaintenance", JSON.stringify({
				shopBasic: false,
				shopAdvanced: false,
			}));

			setShowButtons({
				shopBasic: false,
				shopAdvanced: false,
			});

		}else {
			localStorage.setItem("stateButtonsMaintenance", JSON.stringify(showButtons));
		}

	}, [showButtons])

	return (

		( loading === true || arrBasic === undefined ) ? (
			<SkeletonMaintenance dataArrBasicLength={arrSkeleton.arrBasicSheleton} dataArrAdvancedLength={arrSkeleton.arrAdvancedSkeleton}/>
		) : (
			<>
				<HeaderMenu status="maintenance"/>
				<main className="main-container maintenancepage">

					<SectionMaintenanceBasic arrBasic={arrBasic} showButtons={showButtons} setShowButtons={setShowButtons} mainMaintenanceCart={mainMaintenanceCart} setMainMaintenanceCart={setMainMaintenanceCart} />

					<SectionMaintenanceAdvanced showButtons={ showButtons } setShowButtons={ setShowButtons } mainMaintenanceCart={ mainMaintenanceCart } setMainMaintenanceCart={ setMainMaintenanceCart } />

				</main>
				<FooterMenu status="maintenance" />
			</>
		)

	)

}

export default MaintenancePage;
