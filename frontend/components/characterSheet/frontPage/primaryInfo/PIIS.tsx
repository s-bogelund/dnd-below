import React, { FC } from 'react'
import { validateNumberParameters } from '../../../../utils/validation'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'
import ModifierInputLg from '../../../UI/input/ModifierInputLg'

export interface IPIIS {
	inspiration: number
	proficiency: number
	speed: number
	initiative: number
}

interface IISProps {
	className?: string
	stats: IPIIS
	onUpdateProficiency: (value: number) => void
	onUpdateInitiative: (value: number) => void
	onUpdateSpeed: (value: number) => void
	onUpdateInspiration: (value: number) => void
}

const MAX_INSPIRATION = 10
const MAX_PROFICIENCY = 10
const MAX_SPEED = 999
const MAX_INITIATIVE = 59

const PIIS: FC<IISProps> = props => {
	const {
		stats,
		onUpdateInspiration,
		onUpdateSpeed,
		onUpdateInitiative,
		onUpdateProficiency,
	} = props

	const handleInspiration = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			onUpdateInspiration(0)
			return
		}
		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_INSPIRATION)
		if (!validated) return
		onUpdateInspiration(newVal)
	}

	const handleProficiency = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			onUpdateProficiency(0)
			return
		}
		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_INITIATIVE)
		if (!validated) return
		onUpdateProficiency(newVal)
	}

	const handleInitiative = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			onUpdateInitiative(0)
			return
		}
		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_INITIATIVE)
		if (!validated) return
		onUpdateInitiative(newVal)
	}

	const handleSpeed = (event: React.FormEvent<HTMLInputElement>): void => {
		let value = event.currentTarget.value
		if (value.length < 1) {
			onUpdateSpeed(0)
			return
		}

		while (value[0] === '0') {
			value = value.substring(1)
		}

		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_SPEED)
		if (!validated) return
		onUpdateSpeed(newVal)
	}

	return (
		<div className="flex flex-col h-full w-full bg-transparent py-2 px-1 gap-2">
			<div className="flex flex-row h-[50%] w-full gap-2">
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Proficiency</span>
					<ModifierInputLg
						onInput={event => handleProficiency(event)}
						value={stats.proficiency}
						onFocus={event => event.currentTarget.select()}
						showPlus={stats.proficiency > 0}
						className="w-9 lg:w-12 font-semibold text-center"
						fontSize="text-2xl lg:text-3xl"
					/>
				</Card>
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Inspiration</span>

					<HiddenTextField
						onInput={event => handleInspiration(event)}
						value={stats.inspiration}
						number={true}
						onFocus={event => event.currentTarget.select()}
						className="w-12 text-2xl lg:text-3xl font-semibold text-center"
					/>
				</Card>
			</div>
			<div className="flex flex-row h-[50%] w-full gap-2">
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Initiative</span>
					<ModifierInputLg
						onInput={event => handleInitiative(event)}
						value={stats.initiative}
						onFocus={event => event.currentTarget.select()}
						showPlus={stats.initiative > 0}
						className="w-9 lg:w-12 font-semibold text-center"
						fontSize="text-2xl lg:text-3xl"
					/>
				</Card>
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Speed</span>

					<HiddenTextField
						onInput={event => handleSpeed(event)}
						value={stats.speed}
						number={true}
						onFocus={event => event.currentTarget.select()}
						className="w-12 text-2xl lg:text-3xl font-semibold text-center"
					/>
				</Card>
			</div>
		</div>
	)
}

export default PIIS
