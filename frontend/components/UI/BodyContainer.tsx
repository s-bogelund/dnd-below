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
				'bg-transparent grid p-4 lg:p-8 h-screen w-screen justify-center items-start landscape:h-[1024px] lg:landscape:h-[1366px] ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainer
