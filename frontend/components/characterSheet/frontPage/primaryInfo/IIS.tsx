import React, { FC } from 'react'
import { validateNumberParameters } from '../../../../utils/validation'
import { Card } from '../../../UI/containers/Card'
import HiddenTextField from '../../../UI/input/HiddenTextField'

interface IISProps {
	inspiration: number
	speed: number
	initiative: number
	className?: string
}

const MAX_INSPIRATION = 10
const MAX_SPEED = 999
const MAX_INITIATIVE = 59

const IIS: FC<IISProps> = props => {
	const [inspiration, setInspiration] = React.useState(props.inspiration)
	const [speed, setSpeed] = React.useState(props.speed)
	const [initiative, setInitiative] = React.useState(props.initiative)

	const handleInspiration = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			setInspiration(0)
			return
		}
		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_INSPIRATION)
		if (!validated) return
		setInspiration(newVal)
	}

	const handleInitiative = (event: React.FormEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.value
		if (value.length < 1) {
			setInitiative(0)
			return
		}
		const newVal = parseInt(value)
		const validated = validateNumberParameters(newVal, 0, MAX_INITIATIVE)
		if (!validated) return
		setInitiative(newVal)
	}

	const handleSpeed = (event: React.FormEvent<HTMLInputElement>): void => {}

	return (
		<div className="flex flex-col h-full w-full bg-transparent py-2 px-1 gap-2">
			<Card className="flex flex-col bg-base-300 w-full h-[50%] rounded-sm justify-between content-center pb-2">
				<span className="text-xl tracking-tight">Inspiration</span>
				<HiddenTextField
					onInput={event => handleInspiration(event)}
					value={'+' + inspiration}
					number={true}
					onFocus={event => event.currentTarget.select()}
					className="w-12 text-2xl font-semibold"
				/>
			</Card>
			<div className="flex flex-row h-[50%] w-full bg-red-50 gap-2">
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Initiative</span>
					<HiddenTextField
						onInput={event => handleInitiative(event)}
						value={'+' + initiative}
						number={true}
						onFocus={event => event.currentTarget.select()}
						className="w-12 text-2xl font-semibold"
					/>
				</Card>
				<Card className="bg-base-300 w-[50%] h-full rounded-sm">
					<span className="text-xl tracking-tight">Speed</span>
					<HiddenTextField
						onInput={event => handleSpeed(event)}
						value={speed}
						number={true}
						onFocus={event => event.currentTarget.select()}
						className="w-12 text-2xl font-semibold"
					/>
				</Card>
			</div>
		</div>
	)
}

export default IIS
