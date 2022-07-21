import React from 'react'

interface CardProps {
	className?: string
	header?: string
	children?: React.ReactNode
}

export const Card = (props: CardProps) => {
	return (
		<div
			className={
				'card shadow-sm shadow-gray-700 justify-center items-center bg-base-300 bg-opacity-80 rounded-md ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}
