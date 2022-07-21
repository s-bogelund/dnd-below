import React, { FC, useEffect } from 'react'
import { IAbilityScore, ISkill } from '../../../../../utils/interfaces'
import { Card } from '../../../../UI/containers/Card'
import ASHeader from './ASHeader'
import Skill from './Skill'

interface SkillsList {
	className?: string
	abilityScore: IAbilityScore
	onProficiencyChange: (statName: string, category: string) => void
	onModifierChange?: (asName: string, skillName: string, modifier: number) => void
	onAsChange: (asFullName: string, value: number) => void
}

const SkillsList: FC<SkillsList> = ({
	abilityScore,
	className,
	onProficiencyChange,
	onModifierChange,
	onAsChange,
}) => {
	const handleModifierChange = (newValue: number, skillName: string) => {
		if (isNaN(newValue) || !onModifierChange) return

		onModifierChange(abilityScore.name, skillName, newValue)
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
					skill={skill}
					onProficiencyChange={statName =>
						onProficiencyChange(abilityScore.name, statName)
					}
					onModifierChange={(newValue, skillName) =>
						handleModifierChange(newValue, skillName)
					}
				/>
			)
		})
		return statBundle
	}
	return (
		<>
			<Card className="flex flex-col items-center rounded-md !justify-start bg-neutral w-full h-fit p-[2px] lg:gap-2 ">
				<ASHeader
					statName={abilityScore?.fullName}
					score={abilityScore?.score}
					className="mb-1"
					onAsChange={(event, statName) => {
						console.log('skillList received onAsChange', event, statName)

						onAsChange(event, statName)
					}}
				/>
				{renderStatLines()}
			</Card>
		</>
	)
}

export default SkillsList
