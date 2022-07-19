import React, { FC, FormEvent } from 'react'
import { validateNumberParameters } from '../../../../../utils/validation'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface StatHeaderProps {
	className?: string
	statName: string
	description?: string[]
	score?: number
	onAsChange: (asName: string, value: number) => void
}

const MAX_ABILITYSCORE = 49

const ASHeader: FC<StatHeaderProps> = props => {
	const handleAsChange = (event: React.FormEvent<HTMLInputElement>) => {
		// if empty string, the value should be 0
		if (!event.currentTarget.value.length) {
			props.onAsChange(props.statName, 0)
			return
		}
		const newScore = parseInt(event.currentTarget.value)
		if (!validateNumberParameters(newScore, 0, MAX_ABILITYSCORE) || !props.onAsChange)
			return

		console.log()
		props.onAsChange(props.statName, newScore)
	}

	return (
		<Card
			className={
				'bg-base-300 w-full h-[30%] rounded-md bg-opacity-80 shadow-lg px-2 py-1 ' +
				props.className
			}
		>
			<span className="text-xl lg:text-2xl font-semibold tracking-tight">
				{props.statName || 'Intelligence'}
			</span>

			<HiddenTextField
				onInput={event => handleAsChange(event)}
				value={props.score}
				number={true}
				onFocus={event => event.currentTarget.select()}
				className="w-12 text-2xl lg:text-3xl font-semibold text-center"
			/>
		</Card>
	)
}

export default ASHeader
