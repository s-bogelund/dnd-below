import React from 'react'

interface CardProps {
	className?: string
	children: React.ReactNode
}

export const Card = (props: CardProps) => {
	return (
		<div className="card shadow-lg bg-neutral border-spacing-0 px-8 py-4 scroll-py-4 justify-center align-center bg-opacity-50 text-white max-h-fit">
			{props.children}
		</div>
	)
}
