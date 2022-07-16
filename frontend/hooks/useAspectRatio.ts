import { useEffect, useState } from 'react'

export default function useOrientation() {
	const [orientation, setOrientation] = useState('')

	useEffect(() => {
		window.addEventListener('orientationchange', () => {
			setOrientation(window.orientation.toString())
		})
	}, [])

	return orientation
}
