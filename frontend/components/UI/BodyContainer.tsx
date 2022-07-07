import React, { ReactElement, ReactHTMLElement, useEffect } from 'react'

const BodyContainer = (props: any) => {
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
