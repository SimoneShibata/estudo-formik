const validate = (getValidationSchema, list, vendedores, compradores, tipoProprietario) => (values) => {
	
	try {
		getValidationSchema(values, list, vendedores, compradores, tipoProprietario).validateSync(values, { abortEarly: false })
		return {}
	} catch (error) {
		return getErrorsFromValidationError(error)
	}
}

function getErrorsFromValidationError(validationError) {
	const FIRST_ERROR = 0
	return validationError.inner.reduce((errors, error) => {
		return {
			...errors,
			[error.path]: error.errors[FIRST_ERROR],
		}
	}, {})
}
export  { validate };