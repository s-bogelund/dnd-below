import React from 'react'

const TestBoy = () => {
	const [buttonText, setButtonText]: [string, Function] = React.useState('Hello')

	return (
		<div
			data-theme="coffee"
			// className="max-w-[90%] h-80 px-28 rounded-3xl flex flex-col justify-center bg-neutral-focus self-center"
			className="card bg-neutral justify-center align-center max-w-[70%] h-80 px-28 self-center"
		>
			<button
				className="btn btn-secondary w-40 h-20 p-4 rounded-2xl self-center text-3xl hover:bg-secondary-focus hover:shadow-secondary-content hover:shadow-sm overflow-hidden"
				onClick={() => setButtonText(buttonText + ' Hello')}
			>
				{buttonText}
			</button>
			<p className="text-lg text-secondary-content">{buttonText}</p>
		</div>
	)
}

export default TestBoy
