import React, { FC } from 'react'
import { Card } from '../../../../UI/containers/Card'
import StatHeader from './StatHeader'
import StatLine from './StatLine'

interface StatsListProps {
	className?: string
	name: string
	stats: {
		name: string
		modifier: number
		proficient: boolean
	}[]
	onProficiencyChange: (statName: string, category: string) => void
}

const StatsList: FC<StatsListProps> = props => {
	const [stats, setStats] = React.useState(props.stats)
	const handleModifierChange = (
		index: number,
		e: React.FormEvent<HTMLInputElement>
	) => {
		const value = parseInt(e.currentTarget.value)
		const newStats = [...stats]
		newStats[index].modifier = value
		setStats(newStats)
	}

	const renderStatLines = () => {
		const statBundle = props.stats?.map(stat => {
			return (
				<StatLine
					key={stat.name}
					stat={stat}
					onProficiencyChange={statName => {
						console.log('statList called from', statName)

						props.onProficiencyChange(statName, props.name)
					}}
					onModifierChange={event => handleModifierChange(0, event)}
				/>
			)
		})
		return statBundle
	}

	return (
		<>
			<div className="flex flex-col items-center rounded-md shadow-sm shadow-gray-800 justify-start bg-neutral w-full h-fit pb-3 pt-3 p-[1px] lg:gap-2">
				<StatHeader statName={props.name} className="mb-1" />
				{renderStatLines()}
			</div>
		</>
	)
}

export default StatsList
