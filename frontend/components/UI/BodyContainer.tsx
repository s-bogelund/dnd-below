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
				'bg-transparent grid p-4 lg:p-8 h-screen w-screen justify-center items-start ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainer
