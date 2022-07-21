import React from 'react'
import { Card } from '../../../UI/containers/Card'
import ACHIT from './ACHIT'
import HP from './HP'
import PIIS from './PIIS'
import { IPIIS } from './PIIS'

interface PrimaryInfoProps {
	className?: string
}

const PrimaryInfo = (props: PrimaryInfoProps) => {
	const [PIISState, setPIISState] = React.useState({
		inspiration: 0,
		speed: 25,
		initiative: 0,
		proficiency: 0,
	})

	const handleProficiencyChanged = (newProficiency: number) => {
		console.log('new proficiency: ', newProficiency)
		setPIISState(prevPIISState => ({
			...prevPIISState,
			proficiency: newProficiency,
		}))
	}

	const handleInitiativeChanged = (newInitiative: number) => {
		console.log('new initiative: ', newInitiative)
		setPIISState(prevPIISState => ({
			...prevPIISState,
			initiative: newInitiative,
		}))
	}

	const handleSpeedChanged = (newSpeed: number) => {
		console.log('new speed: ', newSpeed)
		setPIISState(prevPIISState => ({
			...prevPIISState,
			speed: newSpeed,
		}))
	}

	const handleInspirationChanged = (newInspiration: number) => {
		console.log('new inspiration: ', newInspiration)
		setPIISState(prevPIISState => ({
			...prevPIISState,
			inspiration: newInspiration,
		}))
	}

	return (
		<Card
			className={
				'grid grid-cols-3 place-center justify-center content-center bg-neutral bg-opacity-70 px-4 py-2 gap-2 min-h-[14%] h-auto ' +
				props.className
			}
		>
			<ACHIT armorClass={18} hitDice={10} />
			<HP />
			<PIIS
				stats={PIISState}
				onUpdateInitiative={newInit => {
					handleInitiativeChanged(newInit)
				}}
				onUpdateInspiration={newInspiration => {
					handleInspirationChanged(newInspiration)
				}}
				onUpdateProficiency={newProficiency => {
					handleProficiencyChanged(newProficiency)
				}}
				onUpdateSpeed={newSpeed => {
					handleSpeedChanged(newSpeed)
				}}
			/>
		</Card>
	)
}

export default PrimaryInfo
