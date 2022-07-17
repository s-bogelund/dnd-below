import React, { FC } from 'react'

interface Props {
	className?: string
	value?: string | number
	onInput: (event: React.FormEvent<HTMLInputElement>) => void
	placeholder?: string
	number?: true | undefined
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const HiddenTextField: FC<Props> = (props: Props) => {
	const validateInput = (event: React.FormEvent<HTMLInputElement>) => {
		//* if number prop not set, accept all input
		let input = event.currentTarget.value
		console.log(input)
		if (!props.number || input.length < 1) {
			props.onInput(event)
			return
		}

		// //* if number prop is set, accept only numbers (no special characters)
		if (input.match(/[^0-9]/)) {
			console.log('not number')
			return
		}

		props.onInput(event)
	}

	return (
		// type={props.number === true ? 'number' : 'text'} Doesn't work for some reason
		<input
			// type="text"
			className={
				'input focus:border-transparent p-0 bg-transparent h-fit ' +
				props.className
			}
			value={props.value}
			onInput={event => validateInput(event)}
			placeholder={props.placeholder}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			onKeyDown={event => {
				if (event.key === 'Enter') {
					event.currentTarget.blur()
				}
			}}
		/>
	)
}

export default HiddenTextField
