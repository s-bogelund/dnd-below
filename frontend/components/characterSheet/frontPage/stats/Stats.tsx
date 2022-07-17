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

const Stats: FC<StatsProps> = props => {
	return (
		<div
			className={
				'grid grid-rows-2 grid-cols-3 gap-2 justify-center content-center ' +
				props.className
			}
		>
			<StatsList className="justify-center" stats={testStats} />
			<StatsList />
			<StatsList />
			<StatsList />
			<StatsList />
			<StatsList />
		</div>
	)
}

export default Stats
