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
				'card shadow-lg bg-base-300 px-8 py-4 justify-center items-center bg-opacity-80 rounded-md ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}
