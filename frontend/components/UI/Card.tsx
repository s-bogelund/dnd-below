import React from 'react'

interface CardProps {
	className?: string
	children?: React.ReactNode
	theme?: string
}

export const Card = (props: CardProps) => {
	return <div className="card">{props.children}</div>
}
