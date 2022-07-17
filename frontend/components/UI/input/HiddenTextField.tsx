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
		const input = event.currentTarget.value
		if (!props.number || input.length < 1) {
			props.onInput(event)
			return
		}

		//* if number prop is set, accept only numbers
		const regex = /^[0-9]*$/
		if (regex.test(input)) {
			props.onInput(event)
		}
	}
	return (
		<input
			type="text"
			className={
				'input lg:text-md w-fit font-medium focus:border-transparent focus-input-outline p-0 bg-transparent text-center h-fit break-words ' +
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
		></input>
	)
}

export default HiddenTextField
