import React from 'react'
import { Card } from '../../../UI/Card'

interface MetaEntryProps {
	className?: string
	header?: string
	body: string
}

const MetaEntry = (props: MetaEntryProps) => {
	return (
		<div className={'flex flex-col p-0 '}>
			<p className="text-xs mb-1 font-medium">{props.header}</p>
			<Card className="text-sm lg:text-md lg:py-2 md:py-1 rounded-sm lg:px-4 md:px-2 font-medium tracking-tight text-base-content h-full border-[1px] border-white border-opacity-20">
				{props.body}
			</Card>
		</div>
	)
}

export default MetaEntry
