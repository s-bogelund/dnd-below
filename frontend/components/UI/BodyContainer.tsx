import React from 'react'

interface BodyContainerProps {
	className?: string
	children?: React.ReactNode
	theme?: string
}

const BodyContainer = (props: BodyContainerProps) => {
	return (
		<div
			className={
				'grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-4 gap-5 lg:p-10 h-screen w-screen place-items-center ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainer
