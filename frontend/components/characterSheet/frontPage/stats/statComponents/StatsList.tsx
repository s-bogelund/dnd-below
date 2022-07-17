import React, { FC } from 'react'
import { Card } from '../../../../UI/containers/Card'
import StatHeader from './StatHeader'
import StatLine from './StatLine'

interface StatsListProps {
	className?: string
	stats?: {
		name: string
		modifier: number
		proficient: boolean
	}[]
}

const StatsList: FC<StatsListProps> = props => {
	return (
		<div className="flex flex-col items-center rounded-md shadow-sm shadow-gray-800 justify-start bg-neutral w-full h-full p-1 gap-1">
			<StatHeader className="mb-1" />
			<StatLine statName="Saving Throw" proficient={true} modifier={4} />
		</div>
	)
}

export default StatsList
