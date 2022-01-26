
import { types } from "types/types";

describe('Pruebas en types', () => {

	test('debe de mostrarse el objeto con los tipos', () => {

		expect( types ).toEqual({

			modelData: '[model] ModelData loaded',
			modelResetData: '[model] ModelData reset',

			maintenanceBasicData: '[maintenance] BasicData loaded',
			maintenanceAdvancedData: '[maintenance] AdvancedData loaded',

			discountData: '[discount] DiscountData loaded',
			discountResetData: '[discount] DiscountData reset',

		})

	})


})
