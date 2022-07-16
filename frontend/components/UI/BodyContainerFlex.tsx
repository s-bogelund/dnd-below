import React from 'react'

interface BodyContainerProps {
	className?: string
	children?: React.ReactNode
	theme?: string
}

const BodyContainerFlex = (props: BodyContainerProps) => {
	return (
		<div
			className={
				'bg-transparent flex flex-col w-screen h-[1024px] lg:h-[1355px] p-5 ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainerFlex
