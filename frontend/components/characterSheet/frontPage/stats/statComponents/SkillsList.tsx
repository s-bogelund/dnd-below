import React, { FC, useEffect } from 'react'
import { IAbilityScore, ISkill } from '../../../../../utils/dummyData'
import ASHeader from './ASHeader'
import Skill from './Skill'

interface SkillsList {
	className?: string
	abilityScore: IAbilityScore
	onProficiencyChange: (statName: string, category: string) => void
}

const SkillsList: FC<SkillsList> = ({
	abilityScore,
	className,
	onProficiencyChange,
}) => {
	const handleModifierChange = (
		index: number,
		e: React.FormEvent<HTMLInputElement>
	) => {
		const value = parseInt(e.currentTarget.value)
		// const newStats:AbilityScore =...abilityScore
		// newStats[index].modifier = value
		// setAbilityScore(newStats)
	}

	useEffect(() => {
		// console.log('skills', abilityScore)
		// console.log('names', abilityScore?.name)
	}, [abilityScore.skills, abilityScore.name])

	const renderStatLines = () => {
		const statBundle = abilityScore.skills?.map(skill => {
			return (
				<Skill
					key={skill.name}
					stat={skill}
					onProficiencyChange={statName =>
						onProficiencyChange(abilityScore.name, statName)
					}
					onModifierChange={event => handleModifierChange(0, event)}
				/>
			)
		})
		return statBundle
	}
	return (
		<>
			<div className="flex flex-col items-center rounded-md shadow-sm shadow-gray-800 justify-start bg-neutral w-full h-fit pb-3 pt-3 p-[1px] lg:gap-2">
				<ASHeader
					statName={abilityScore?.fullName}
					score={abilityScore?.score}
					className="mb-1"
				/>
				{renderStatLines()}
			</div>
		</>
	)
}

export default SkillsList
