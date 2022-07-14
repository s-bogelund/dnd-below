import React from 'react'
import { Card } from '../../UI/Card'
import { MinorMetaColumn } from './MetaInfo'

interface MinorMetaProps {
	className?: string
	fields: [MinorMetaColumn, MinorMetaColumn]
	children?: React.ReactNode
}

const MinorMeta = (props: MinorMetaProps) => {
	const { fields } = props

	return (
		<div className="flex flex-col bg-transparent col-span-2 gap-1s justify-between content-between h-full">
			<Card
				header={fields[0].header}
				className="text-md py-2 px-4 font-medium whitespace-nowrap text-primary"
			>
				{fields[0].body}
			</Card>
			<Card
				header={fields[1].header}
				className="text-md py-2 px-4 font-medium whitespace-nowrap text-primary"
			>
				{fields[1].body}
			</Card>
		</div>
	)
}

export default MinorMeta
