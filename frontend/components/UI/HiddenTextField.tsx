import React from 'react'

interface ButtonProps {
	className?: string
	value?: string | number
	onInput: (event: React.FormEvent<HTMLInputElement>) => void
	placeholder?: string
	number?: true | undefined
}

const HiddenTextField = (props: ButtonProps) => {
	const validateInput = (event: React.FormEvent<HTMLInputElement>) => {
		//* if number prop not set, accept all input
		const input = event.currentTarget.value
		if (!props.number || input.length < 1) {
			props.onInput(event)
			return
		}

		//* if number prop is set, accept only numbers
		const regex = /^[0-9]*$/
		if (regex.test(input)) props.onInput(event)
	}
	return (
		<input
			type="text"
			className={
				'input ghost lg:text-md w-full font-medium focus:border-transparent focus-input-outline p-0 bg-transparent text-center h-fit break-words rounded-sm ' +
				props.className
			}
			value={props.value}
			onInput={event => validateInput(event)}
			placeholder={props.placeholder}
		></input>
	)
}

export default HiddenTextField
