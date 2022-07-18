import React, { FC, useEffect } from 'react'
import { Skill } from '../../../../../utils/dummyData'
import { Card } from '../../../../UI/containers/Card'
import StatHeader from './StatHeader'
import StatLine from './StatLine'

interface StatsListProps {
	className?: string
	name: string
	skills: Skill[]
	onProficiencyChange: (statName: string, category: string) => void
}

const StatsList: FC<StatsListProps> = props => {
	const [skills, setSkills] = React.useState(props.skills)
	const handleModifierChange = (
		index: number,
		e: React.FormEvent<HTMLInputElement>
	) => {
		const value = parseInt(e.currentTarget.value)
		const newStats = [...skills]
		newStats[index].modifier = value
		setSkills(newStats)
	}

	useEffect(() => {
		console.log('skills', skills)
		console.log('names', props.name)
	}, [props.skills, props.name])

	const renderStatLines = () => {
		const statBundle = props.skills?.map(skill => {
			return (
				<StatLine
					key={skill.name}
					stat={skill}
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
