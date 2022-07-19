import React, { FC } from 'react'
import { Card } from '../../../UI/containers/Card'

interface IListWAProps {
	className?: string
	header?: string
	children?: React.ReactNode
}

const ListWA: FC<IListWAProps> = props => {
	return (
		<div
			className={
				'card shadow-sm shadow-gray-800 bg-neutral bg-opacity-80 rounded-md w-full flex flex-col justify-start content-center items-center py-2 px-1 ' +
				props.className
			}
		>
			<div className=" text-xl lg:text-2xl font-semibold mb-1">
				{props.header || 'Header'}
			</div>
			{props.children}
		</div>
	)
}

export default ListWA
