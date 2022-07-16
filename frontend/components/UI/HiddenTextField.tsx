import React from 'react'

interface ButtonProps {
	className?: string
	value?: string
	onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
}

const HiddenTextField = (props: ButtonProps) => {
	return (
		<input
			type="text"
			className={
				'input ghost lg:text-md w-full font-medium focus:border-transparent focus-input-outline p-0 bg-transparent text-center h-fit break-words rounded-sm ' +
				props.className
			}
			value={props.value}
			onInput={props.onInput}
			placeholder={props.placeholder}
		></input>
	)
}

export default HiddenTextField
