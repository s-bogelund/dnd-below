import React from 'react'

interface ButtonProps {
	className?: string
	children?: React.ReactNode
	onClick?: () => void
}

const HiddenButton = (props: ButtonProps) => {
	return (
		<button
			onClick={props.onClick}
			className={'btn btn-hidden pb-1 btn-square ' + props.className}
		>
			{props.children}
		</button>
	)
}

export default HiddenButton
