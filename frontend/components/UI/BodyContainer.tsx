import React, { ReactElement, ReactHTMLElement, useEffect } from 'react'

const BodyContainer = (props: any) => {
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
