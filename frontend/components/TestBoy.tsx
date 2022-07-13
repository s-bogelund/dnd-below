import React from 'react'
import { Card } from './UI/Card'

const TestBoy = () => {
	const [buttonText, setButtonText]: [string, Function] = React.useState('Hello')
	return (
		<Card>
			<button className="btn btn-secondary outline outline-primary-content outline-3 outline-offset-0  xl:hover:border-[1px] xl:hover:border-primary text-secondary-content">
				{buttonText}
			</button>
			<button className="btn btn-secondary outline outline-primary-content outline-3 outline-offset-0  xl:hover:border-[1px] xl:hover:border-primary text-secondary-content">
				{buttonText}
			</button>
		</Card>
	)
}

export default TestBoy
