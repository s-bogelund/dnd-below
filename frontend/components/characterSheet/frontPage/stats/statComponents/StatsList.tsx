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
	const [stats, setStats] = React.useState(
		props.stats || [{ name: 'Text', modifier: 2, proficient: true }]
	)

	const renderStatLines = () => {
		const statBundle = props.stats?.map(stat => {
			return (
				<StatLine
					key={stat.name}
					stat={stat}
					onProficiencyChange={() => console.log('proficiency changed')}
				/>
			)
		})
		return statBundle
	}

	return (
		<>
			<div className="flex flex-col items-center rounded-md shadow-sm shadow-gray-800 justify-start bg-neutral w-full h-fit pb-3 pt-3 p-[1px] lg:gap-2">
				<StatHeader className="mb-1" />
				{renderStatLines()}
			</div>
		</>
	)
}

export default StatsList
