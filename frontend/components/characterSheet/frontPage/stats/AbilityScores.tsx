import { statSync } from 'fs'
import React, { FC, useEffect, useState } from 'react'
import { getStats, isIAbilityScore, storeStatsLocal } from '../../../../utils/dummyData'
import { IAbilityScore } from '../../../../utils/interfaces'
import { Card } from '../../../UI/containers/Card'
import ASHeader from './statComponents/ASHeader'
import SkillsList from './statComponents/SkillsList'

const testStats = [
	{ name: 'Strength', modifier: 2, proficient: true },
	{ name: 'Dexterity', modifier: 2, proficient: true },
	{ name: 'Constitution', modifier: 2, proficient: false },
	{ name: 'Intelligence', modifier: 2, proficient: false },
	{ name: 'Wisdom', modifier: 2, proficient: true },
	{ name: 'Charisma', modifier: 2, proficient: true },
]

interface StatsProps {
	className?: string
}

const AbilityScores: FC<StatsProps> = props => {
	const [abilityScores, setAbilityScores] = useState<IAbilityScore[]>([])

	useEffect(() => {
		async function fetchData() {
			const data = await getStats()
			console.log(data)

			setAbilityScores(data)
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (abilityScores.length > 0) {
			console.log(abilityScores)
			storeStatsLocal(abilityScores, 'abilityScores')
		}
	}, [abilityScores])

	const handleProficiencyChanged = (abilityScoreName: string, skillName: string) => {
		const newAbilityScore = abilityScores.map(abilityScore => {
			if (abilityScore.name === abilityScoreName) {
				abilityScore.skills.map(skill => {
					if (skill.name === skillName) {
						skill.proficient = !skill.proficient
					}
				})
			}
			return abilityScore
		})
		setAbilityScores(newAbilityScore)
	}

	const handleModifierChanged = (
		abilityScoreName: string,
		skillName: string,
		modifier: number
	) => {
		const newAbilityScore = abilityScores.map(abilityScore => {
			if (abilityScore.name === abilityScoreName) {
				abilityScore.skills.map(skill => {
					if (skill.name === skillName) {
						skill.modifier = modifier
					}
				})
			}
			return abilityScore
		})
		setAbilityScores(newAbilityScore)
	}

	const handleAsChange = (abilityScoreName: string, value: number) => {
		const newAbilityScore = abilityScores.map(abilityScore => {
			if (abilityScore.fullName === abilityScoreName) {
				abilityScore.score = value
			}
			return abilityScore
		})

		setAbilityScores(newAbilityScore)
	}

	const renderStatsLists = () => {
		const lists = abilityScores.map(stat => {
			return (
				<SkillsList
					key={stat.name}
					abilityScore={stat}
					onProficiencyChange={handleProficiencyChanged}
					onModifierChange={(asName, skillName, value) => {
						handleModifierChanged(asName, skillName, value)
					}}
					onAsChange={(asName, value) => handleAsChange(asName, value)}
				/>
			)
		})
		return lists
	}

	return (
		<>
			{abilityScores && (
				<div
					className={
						'grid grid-rows-ability-score grid-cols-3 gap-2 justify-center content-center ' +
						props.className
					}
				>
					{renderStatsLists()}
				</div>
			)}
		</>
	)
}

export default AbilityScores
