import { LocalLaundryService, RestaurantMenu } from '@mui/icons-material'
import { statSync } from 'fs'
import React, { FC, useEffect } from 'react'
import {
	IAbilityScore,
	getData,
	isIAbilityScore,
} from '../../../../utils/dummyData'
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
	const [abilityScores, setAbilityScores] = React.useState<IAbilityScore[]>([])

	useEffect(() => {
		async function fetchData() {
			const data = await getData()

			setAbilityScores(data)
		}
		fetchData()
	}, [])

	const handleProficiencyChanged = (
		abilityScoreName: string,
		skillName: string
	) => {
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

	const renderStatsLists = () => {
		const lists = abilityScores.map(stat => {
			return (
				<SkillsList
					key={stat.name}
					abilityScore={stat}
					onProficiencyChange={handleProficiencyChanged}
				/>
			)
		})
		return lists
	}

	return (
		<div
			className={
				'grid grid-rows-2 grid-cols-3 gap-2 justify-center content-center ' +
				props.className
			}
		>
			{renderStatsLists()}
		</div>
	)
}

export default AbilityScores
