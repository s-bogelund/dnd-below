import React from 'react'

const TestBoy = () => {
	const [buttonText, setButtonText] = React.useState('Hello')

	return (
		<div
			data-theme="halloween"
			className="w-80 h-80 rounded-3xl shadow-md hover:shadow-red-400 hover:shadow-2xl flex flex-col justify-center "
		>
			<button
				className="btn btn-primary w-40 h-40 rounded-full self-center text-xl"
				onClick={() => setButtonText(buttonText + ' ' + buttonText)}
			>
				{buttonText}
			</button>
		</div>
	)
}

export default TestBoy
