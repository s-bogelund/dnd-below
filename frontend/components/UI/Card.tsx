import React from 'react'

interface CardProps {
	className?: string
	header?: string
	wrapperClass?: string
	children?: React.ReactNode
}

export const Card = (props: CardProps) => {
	return (
		<div className={'flex flex-col ' + props.wrapperClass}>
			{props.header && <p className="text-sm mb-1 font-semibold">{props.header}</p>}
			<div
				className={
					'card shadow-lg bg-base-300 px-8 py-4 justify-center items-center bg-opacity-80 rounded-md ' +
					props.className
				}
			>
				{props.children}
			</div>
		</div>
	)
}
