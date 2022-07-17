import React from 'react'
import { Card } from '../../../UI/containers/Card'
import ACHIT from './ACHIT'
import HP from './HP'
import IIS from './IIS'

interface PrimaryInfoProps {
	className?: string
}

const PrimaryInfo = (props: PrimaryInfoProps) => {
	return (
		<Card
			className={
				'grid grid-cols-3 place-center justify-center content-center bg-neutral bg-opacity-70 px-4 py-2 gap-2 min-h-[14%] h-auto ' +
				props.className
			}
		>
			<ACHIT armorClass={18} hitDice={10} />
			<HP />
			<IIS inspiration={0} speed={25} initiative={0} />
		</Card>
	)
}

export default PrimaryInfo
