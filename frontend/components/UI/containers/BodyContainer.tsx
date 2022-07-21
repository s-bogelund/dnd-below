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
				'bg-transparent flex flex-col w-screen h-[1024px] lg:h-[1355px] lg:w-[1024px] p-5  content-center justify-center self-center justify-self-center m-0 ' +
				props.className
			}
		>
			{props.children}
		</div>
	)
}

export default BodyContainer
