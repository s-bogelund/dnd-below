import { statSync } from 'fs'
import React, { FC, useEffect } from 'react'
import { AbilityScore, getData } from '../../../../utils/dummyData'
import { Card } from '../../../UI/containers/Card'
import StatHeader from './statComponents/StatHeader'
import StatsList from './statComponents/StatsList'

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

const Stats: FC<StatsProps> = props => {
	const [abilityScores, setAbilityScores] = React.useState<AbilityScore[]>([])

	useEffect(() => {
		async function fetchData() {
			const data = await getData()
			console.log('awaited data', data)

			setAbilityScores(data)
		}
		fetchData()

		console.log(abilityScores)
	}, [])

	const handleProficiencyChanged = (statName: string, category: string) => {
		console.log(statName, category)
		// const correctCategory = stats.find(stat => stat.name === category)
		// console.log(correctCategory)
		// if (correctCategory)
		// 	correctCategory.proficient = !correctCategory?.proficient

		// // setStats([...stats])
		// console.log(correctCategory)
	}

	useEffect(() => {
		console.log('abilityScores', abilityScores)
	}, [abilityScores])

	const renderStatsLists = () => {
		console.log('abilityScores', abilityScores)

		const lists = abilityScores.map(stat => {
			return (
				<StatsList
					key={stat.name}
					name={stat.fullName}
					skills={stat.skills}
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
			{/* <StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Strength"
				className="justify-center"
				stats={props.abilityScores}
			/> */}
			{/* <StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Constitution"
				className="justify-center"
				stats={testStats}
			/>
			<StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Dexterity"
				className="justify-center"
				stats={testStats}
			/>
			<StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Intelligence"
				className="justify-center"
				stats={testStats}
			/>
			<StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Wisdom"
				className="justify-center"
				stats={testStats}
			/>
			<StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Charisma"
				className="justify-center"
				stats={testStats}
			/> */}
		</div>
	)
}

export default Stats
