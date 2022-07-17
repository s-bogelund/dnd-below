import React, { FC } from 'react'
import { Card } from '../../../UI/containers/Card'
import StatHeader from './statComponents/StatHeader'
import StatsList from './statComponents/StatsList'

interface StatsProps {
	className?: string
}

const Stats: FC<StatsProps> = props => {
	return (
		<div
			className={
				'grid grid-rows-2 grid-cols-3 gap-2 justify-center content-center ' +
				props.className
			}
		>
			<StatsList className="justify-center" />
			<StatsList />
			<StatsList />
			<StatsList />
			<StatsList />
			<StatsList />
		</div>
	)
}

export default Stats
