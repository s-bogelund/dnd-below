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
				'bg-base-100 grid grid-cols-2 grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:p-10 h-screen w-screen place-items-center gap-1' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainer
