import { statSync } from 'fs'
import React, { FC } from 'react'
import { Card } from '../../../UI/containers/Card'
import StatHeader from './statComponents/StatHeader'
import StatsList from './statComponents/StatsList'

interface StatsProps {
	className?: string
}

const testStats = [
	{ name: 'Strength', modifier: 2, proficient: true },
	{ name: 'Dexterity', modifier: 2, proficient: true },
	{ name: 'Constitution', modifier: 2, proficient: false },
	{ name: 'Intelligence', modifier: 2, proficient: false },
	{ name: 'Wisdom', modifier: 2, proficient: true },
	{ name: 'Charisma', modifier: 2, proficient: true },
]
const localStorageStats = localStorage.getItem('stats')

const Stats: FC<StatsProps> = props => {
	const [stats, setStats] = React.useState(testStats)
	const [localStats, setLocalStats] = React.useState(localStorageStats)

	const handleProficiencyChanged = (statName: string, category: string) => {
		console.log(statName, category)
		const correctCategory = stats.find(stat => stat.name === category)
		console.log(correctCategory)
		if (correctCategory)
			correctCategory.proficient = !correctCategory?.proficient

		// setStats([...stats])
		console.log(correctCategory)
	}

	function statTracter() {
		
	}
	// const renderStatsLists = () => {
	// 	return Object.entries(stats).map((key, value) => {
	// 		console.log(key, value)
	// 		return (
	// 			<StatsList
	// 				key={String(key).toUpperCase()}
	// 				statName={key}
	// 				stats={value}
	// 				handleProficiencyChanged={handleProficiencyChanged}
	// 			/>
	// 		)
	// 	})
	// }

	// renderStatsLists()

	return (
		<div
			className={
				'grid grid-rows-2 grid-cols-3 gap-2 justify-center content-center ' +
				props.className
			}
		>
			<StatsList
				onProficiencyChange={handleProficiencyChanged}
				name="Strength"
				className="justify-center"
				stats={testStats}
			/>
			<StatsList
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
			/>
		</div>
	)
}

export default Stats
