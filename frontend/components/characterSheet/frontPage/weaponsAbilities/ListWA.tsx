import React, { FC } from 'react'
import { Card } from '../../../UI/containers/Card'

interface IListWAProps {
	className?: string
	header?: string
	children?: React.ReactNode
}

const ListWA: FC<IListWAProps> = props => {
	return (
		<Card className={'bg-neutral !justify-start py-2 px-1 ' + props.className}>
			<div className=" text-xl lg:text-2xl font-semibold mb-1">
				{props.header || 'Header'}
			</div>
			{props.children}
		</Card>
	)
}

export default ListWA
