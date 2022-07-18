import React, { FC } from 'react'
import { Card } from '../../../../UI/containers/Card'
import HiddenTextField from '../../../../UI/input/HiddenTextField'

interface StatHeaderProps {
	className?: string
	statName?: string
	description?: string[]
	score?: number
}

const ASHeader: FC<StatHeaderProps> = props => {
	return (
		<Card
			className={
				'bg-base-300 w-fit h-[30%] rounded-md bg-opacity-80 shadow-lg px-3 py-1 ' +
				props.className
			}
		>
			<span className="text-xl lg:text-2xl font-semibold">
				{props.statName || 'Intelligence'}
			</span>

			<HiddenTextField
				onInput={event => console.log(event)}
				value={props.score}
				number={true}
				onFocus={event => event.currentTarget.select()}
				className="w-12 text-2xl lg:text-3xl font-semibold text-center"
			/>
		</Card>
	)
}

export default ASHeader
