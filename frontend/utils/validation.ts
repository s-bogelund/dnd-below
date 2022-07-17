export const validateNumberParameters = (
	value: number,
	min: number,
	max: number
): boolean => {
	console.log('validating that', value, 'is between', min, 'and', max)

	if (value < min) return false
	if (value > max) return false

	return true
}
